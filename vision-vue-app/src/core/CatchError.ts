let MaxErrorReportLimit = 100;

// 简单的将错误采集上报到 /api/logs/error
window.onerror = function (message, source, lineno, colno, error) {
    // 同一个页面最多上报100次错误，防止某个循环错误页面一直打开，不断的报错
    if (MaxErrorReportLimit-- < 0) return;
    try {
        let msg: string | object | undefined | null = {
            message: message,
            source: source,
            lineno: lineno,
            colno: colno,
            stack: error && error.stack,
            traceId: window.appData && window.appData.traceId,
            href: window.location.href,
        };
        msg = JSON.stringify(msg);
        window.__macaca_latest_error = msg;
        const req = new XMLHttpRequest();
        req.open('post', '/api/logs/error', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(msg);
        if (window.tracker) {
            const {tracker} = window;
            tracker.logError(error, {
                code: 1,
                msg: message,
            });
        }
    } catch (err) {
        console.log('report error', err);
    }
};
window.addEventListener('unhandledrejection', function (e) {
    const data = {
        message: e.reason && e.reason.message,
        stack: e.reason && e.reason.stack,
        href: window.location.href,
        traceId: window.appData && window.appData.traceId,
    };
    window._macaca_runtime_collector.push({
        type: 'unhandledrejection',
        data: data,
    });
});
export default function createWebSocketPlugin({socket}: { socket: any }) {
    return (store: any) => {
        socket.on('data', (data: any) => {
            store.commit('receiveData', data)
        })
        store.subscribe((mutation: any) => {
            if (mutation.type === 'UPDATE_DATA') {
                socket.emit('update', mutation.payload)
            }
        })
    }
}
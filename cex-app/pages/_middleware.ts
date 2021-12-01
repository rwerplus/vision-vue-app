#!/usr/bin/env ts-node

import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // console.log('middleware req has got :', req);
  // console.log('middleware ev has got :', ev);
  // return new Response('Hello, world!');
  console.log(req.url);
}

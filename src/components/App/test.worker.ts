import outerValue from "./test-2-worker"
// @ts-ignore
const ctx: Worker = self as any

// 响应父线程的消息
ctx.addEventListener("message", (event) => {
  const { data } = event
  ctx.postMessage({
    in: JSON.stringify(data),
    out: `【${outerValue}】 from test.worker`,
  })
})

// export default {}

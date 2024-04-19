import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%'
        }}
      >
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M225.5872 326.4a29.0304 29.0304 0 0 0-9.472-24.5248l-70.144-84.48V204.8h217.7024l168.2944 369.0496L679.936 204.8h207.5136v12.5952L827.4944 274.944a17.5616 17.5616 0 0 0-6.656 16.8448v422.4c-1.024 6.4 1.536 12.8 6.656 16.7936l58.5216 57.4464v12.6464h-294.4v-12.6464l60.5696-58.88c5.9392-5.9392 5.9392-7.68 5.9392-16.7936V371.3024L489.472 799.5904h-22.7328L270.336 371.3024v287.0272a39.68 39.68 0 0 0 10.8544 32.9728l78.848 95.744v12.544H136.5504v-12.5952l78.848-95.744a38.1952 38.1952 0 0 0 10.1888-32.9216V326.4z" fill="currentColor"></path></svg>
      </div>
    ),
    size
  )
}

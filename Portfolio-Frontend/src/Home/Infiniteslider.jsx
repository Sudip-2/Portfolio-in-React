import React, { useState } from 'react'
import Slideritems from './Slideritems'

const Infiniteslider = () => {
    const [width, setWidth] = useState("100px")
    const [height, setHeight] = useState("100px")

    return (
        <>
            <div
                className={`w-full min-w-[1200px] overflow-hidden mt-8 sm:mt-4`}
                style={{
                    height: height
                }}
            >
                <div className='flex relative'
                >

                    <Slideritems imgSrc="https://imgs.search.brave.com/nDuQhfwyXG2uQF_8gat4UPE0XXVX5DqEMvHrdgtPMiA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzYxL0hU/TUw1X2xvZ29fYW5k/X3dvcmRtYXJrLnN2/Zy82NDBweC1IVE1M/NV9sb2dvX2FuZF93/b3JkbWFyay5zdmcu/cG5n" altText="ReactImage" aniDelay="0s" height={height} width={width} />
                    <Slideritems imgSrc="https://imgs.search.brave.com/aEGiTSo22dl3ju1IuSx7-Ex0GTyZ0ELtoLb2u8BWqBY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzLzdqMzUz/djh4ZTFoODYxdWM1/aTUzLnBuZw" aniDelay="1s" height={height} width={width} />
                    <Slideritems imgSrc="https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn" altText="ReactImage" aniDelay="2s" height={height} width={width} />
                    <Slideritems imgSrc="https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n" altText="ReactImage" aniDelay="3s" height={height} width={width} />
                    <Slideritems imgSrc="https://imgs.search.brave.com/5nY5fVpDicqGrKwwK5yf7-kvc-ukpzi5Wp9N7iMC3Bo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5vZGUtanMtbG9n/by1pY29uLWRvd25s/b2FkLWluLXN2Zy1w/bmctZ2lmLWZpbGUt/Zm9ybWF0cy0tbm9k/ZWpzLXByb2dyYW1t/aW5nLWxhbmd1YWdl/LXBhY2stbG9nb3Mt/aWNvbnMtMTE3NDky/NS5wbmc_Zj13ZWJw/Jnc9MjU2" altText="ReactImage" aniDelay="4s" height={height} width={width} />
                    <Slideritems imgSrc="https://imgs.search.brave.com/M4VVbZbWznYmGmK_UapYaFDGlC9bFryIQju7XWcOy5w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk1MDEx/Mi8xNDA4MDc0MC84/ZjkyMDM3YS1mNTI0/LTExZTUtOGM1Mi0y/N2E5YWM2M2FmNTAu/cG5n" altText="ReactImage" aniDelay="5s" height={height} width={width} />
                    <Slideritems imgSrc="https://imgs.search.brave.com/VLnEHonS4KKeXOOed6bulOU3YlEOOD8PhLf5Tjk-Jkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTW9u/Z29kYi1QTkctUGlj/LnBuZw" altText="ReactImage" aniDelay="6s" height={height} width={width} />
                    <Slideritems imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042" altText="ReactImage" aniDelay="7s" height='80px' width='120px' />

                </div>
            </div>
        </>
    )
}

export default Infiniteslider
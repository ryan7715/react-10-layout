
// 테마를 사용하기 위해서는 미리 사이트에서 이용할 책상 팔레트를 마련하기 위해
// styled-components에서 제공하는 DefaultTheme 타입을 "재정의" 함
// 사람마다 생각하는 색상 팔레트의 종류가 다를테니까.    => 파일명.d.ts.를 최상단에 포함

import type {DefaultTheme} from "styled-components";

export const LightTheme: DefaultTheme = {
    color: {
        background: "#FFFFFF",
        text: "#111111",
        primary: "#6C63FF",
        muted: "#F4F4F4",
    }
}

export const DarkTheme: DefaultTheme = {
    color: {
        background: "#111111",
        text: "#FFFFFF",
        primary: "#6C63FF",
        muted: "#222222",
    }
}
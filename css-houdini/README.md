# CSS Houdini

CSS 엔진부를 접근할 수 있는 저레벨 API 셋. 브라우저 렌더링 엔진의 critical path 중  styling 과 layout process 를 후킹하는 형태로 CSS 를 확장할 수 있다. 

Houdini 를 통해 개발자는 CSSOM 에 직접 접근할 수 있다. 브라우저가 CSS 처럼 파싱할 수 있도록 코드 작성이 가능하다. 따라서 아직 나오지 않은 CSS 피쳐를 개발자가 구현할 수 있다.

Houdini is a set of low-level APIs that exposes part of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser's rendering engine. 

Houdini is a group of APIs that give developers direct access to the CSS_Object_model(CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browser.

---

https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini

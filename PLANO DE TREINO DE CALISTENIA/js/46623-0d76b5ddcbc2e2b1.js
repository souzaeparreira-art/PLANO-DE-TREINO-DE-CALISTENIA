try{!function(){var e="u">typeof window?window:"u">typeof global?global:"u">typeof globalThis?globalThis:"u">typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="53046c83-245d-4fb4-96f1-bc436f13cc00",e._sentryDebugIdIdentifier="sentry-dbid-53046c83-245d-4fb4-96f1-bc436f13cc00")}()}catch(e){}(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46623],{37223:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var a=r(14232),i=r(674695),n=r(232922),s=r(581856),o=r(69106),l=r(24288),c=r(732344),d=r(511797),u=r(48111),p=r(288583);let g=()=>{let{lang:e}=(0,d.B)(),t=(0,i.d4)(s.hS),r=(0,i.d4)(o.Ut),g=(0,i.d4)(n.jz),_=(0,i.d4)(s.WT),{platformType:m,browser:h,engineName:v,osName:y,osVersion:f,isInitialized:S}=(0,p.A)(),{host:b}=(0,c.T)();return(0,a.useMemo)(()=>({data:{[u.Pe.LOCALE]:e,[u.Pe.DOMAIN]:l.My?window.location.hostname:b??void 0,[u.Pe.COUNTRY]:(t||r)?.toLowerCase(),[u.Pe.FLOW]:g||void 0,[u.Pe.TRAFFIC_SOURCE]:_?.utmSource,[u.Pe.PLATFORM]:m||void 0,[u.Pe.BROWSER]:h||void 0,[u.Pe.BROWSER_ENGINE]:v||void 0,[u.Pe.OS_NAME]:y||void 0,[u.Pe.OS_VERSION]:f||void 0},isUserAgentInitialized:S}),[e,b,t,r,g,_?.utmSource,m,h,v,y,f,S])}},158425:(e,t,r)=>{"use strict";r.d(t,{X:()=>l});var a=r(637876),i=r(918847),n=r.n(i);r(14232);var s=r(928188);let o=n()(()=>Promise.all([r.e(93025),r.e(9606),r.e(55581)]).then(r.bind(r,855581)),{loadableGenerated:{webpack:()=>[855581]},ssr:!1}),l=()=>{let{shouldShowSkipButton:e}=(0,s.zD)();return e?(0,a.jsx)(o,{}):null}},172106:(e,t,r)=>{"use strict";r.d(t,{n:()=>l,C:()=>v});var a=r(14232),i=r(506641),n=r(782812);let s="ssr-loader-overlay",o="ssrClickHandler",l=({pathname:e})=>{let{goNext:t}=(0,i.u)(),r=(0,n.rd)();return(0,a.useEffect)(()=>{let a=r.pathname??window.location.pathname,i=e.replace(/^\//,"");if(!i||-1===a.indexOf(i))return;let n=window;n[o]||(n[o]={});let l=n[o];l.hydrated=!0;let c=l.pendingClickTarget;l.pendingClickTarget=null,c&&((()=>{if("u"<typeof document)return;let e=document.getElementById(s);e&&e.remove()})(),c&&"function"==typeof c.click&&document.contains(c)?c.click():t())},[t,e,r.pathname]),null};var c=r(637876),d=r(45105),u=r.n(d),p=r(37223),g=r(48111);let _="/api/monitoring/otel/metrics",m=[0,1e3,2e3,3e3,5e3,8e3,13e3,21e3,34e3],h=[0,1e3,3e3],v=()=>{let{data:e}=(0,p.A)(),t=(0,a.useMemo)(()=>{let t,r=(0,g.hQ)({metricName:g.fV.SSR_CLICK_BEFORE_PAGE_LOADED,metricDescription:g.$V[g.fV.SSR_CLICK_BEFORE_PAGE_LOADED],attributes:e}),a=(0,g.hQ)({metricName:g.fV.USER_CLOSED_PAGE,metricDescription:g.$V[g.fV.USER_CLOSED_PAGE],attributes:e}),i=(0,g.hQ)({metricName:g.fV.USER_TAB_INACTIVE,metricDescription:g.$V[g.fV.USER_TAB_INACTIVE],attributes:e}),n=(0,g.hQ)({metricName:g.fV.USER_TAB_ACTIVE,metricDescription:g.$V[g.fV.USER_TAB_ACTIVE],attributes:e}),l=(0,g.hQ)({metricName:g.fV.USER_IS_ACTIVE,metricDescription:g.$V[g.fV.USER_IS_ACTIVE],attributes:e});return t={ssrClickBeforePageLoaded:JSON.stringify(r),pageClose:JSON.stringify(a),tabInactive:JSON.stringify(i),tabActive:JSON.stringify(n),userIsActive:JSON.stringify(l)},`
(function() {
  var stateKey = '${o}';
  window[stateKey] = window[stateKey] || {};
  var ssrClickBeforePageLoadedMetricPayload = ${t.ssrClickBeforePageLoaded};
  var pageCloseMetricPayload = ${t.pageClose};
  var tabInactiveMetricPayload = ${t.tabInactive};
  var tabActiveMetricPayload = ${t.tabActive};
  var userIsActivePayload = ${t.userIsActive};

  var sessionStartTime = Date.now();
  var interactionClickCount = 0;

  function countClick() { interactionClickCount++; }

  function sendSsrClickBeforePageLoadedMetric(isCta) {
    var payload = JSON.parse(JSON.stringify(ssrClickBeforePageLoadedMetricPayload));
    var ts = Date.now() * 1e6;
    if (payload.resourceMetrics && payload.resourceMetrics[0] && payload.resourceMetrics[0].scopeMetrics) {
      var dp = payload.resourceMetrics[0].scopeMetrics[0].metrics[0].sum.dataPoints[0];
      dp.startTimeUnixNano = ts;
      dp.timeUnixNano = ts;
      dp.attributes.push(
        { key: '${g.iX}.${g.Pe.IS_CTA}', value: { stringValue: String(isCta) } },
      );
    }
    fetch('${_}/${g.fV.SSR_CLICK_BEFORE_PAGE_LOADED}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function() {});
  }

  var userIsActiveSent = false;
  function sendUserIsActiveMetric() {
    if (userIsActiveSent) return;
    userIsActiveSent = true;

    document.removeEventListener('click', sendUserIsActiveMetric, true);
    document.removeEventListener('touchstart', sendUserIsActiveMetric, true);
    document.removeEventListener('pointerdown', sendUserIsActiveMetric, true);

    var payload = JSON.parse(JSON.stringify(userIsActivePayload));
    var ts = Date.now() * 1e6;
    if (payload.resourceMetrics && payload.resourceMetrics[0] && payload.resourceMetrics[0].scopeMetrics) {
      var dp = payload.resourceMetrics[0].scopeMetrics[0].metrics[0].sum.dataPoints[0];
      dp.startTimeUnixNano = ts;
      dp.timeUnixNano = ts;
    }
    fetch('${_}/${g.fV.USER_IS_ACTIVE}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function() {});
  }

  function getDomSnapshot() {
    try {
      var clone = document.documentElement.cloneNode(true);
      var styleEls = clone.querySelectorAll('style, link[rel="stylesheet"], script#__NEXT_DATA__, script#ssr-click-capture');
      for (var i = 0; i < styleEls.length; i++) styleEls[i].parentNode && styleEls[i].parentNode.removeChild(styleEls[i]);
      var all = clone.querySelectorAll('*');
      for (var j = 0; j < all.length; j++) all[j].removeAttribute('style');
      return clone.outerHTML;
    } catch (e) { return ''; }
  }

  function getExternalScripts() {
    var host = window.location.hostname;
    var entries = performance.getEntriesByType ? performance.getEntriesByType('resource') : [];
    var result = [];
    var scriptTypes = ['text/javascript', 'application/javascript', 'application/x-javascript'];
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var ct = (e.contentType || '').toLowerCase();
      var isScript = scriptTypes.some(function(t) { return ct.indexOf(t) !== -1; }) || (e.initiatorType === 'script' && !ct);
      if (!isScript) continue;
      try {
        var url = new URL(e.name);
        if (url.hostname !== host) result.push({ name: e.name, contentType: e.contentType });
      } catch (x) {}
    }
    return result;
  }

  function sendDomSnapshot() {
    var payload = { domSnapshot: getDomSnapshot(), externalScripts: getExternalScripts() };
    fetch('/api/monitoring/otel/metrics/snapshot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function() {});
  }

  ${JSON.stringify(h)}.forEach(function(delay) { setTimeout(sendDomSnapshot, delay); });

  var pageCloseSent = false;
  function sendPageCloseMetric() {
    if (pageCloseSent) return;
    pageCloseSent = true;
    var payload = JSON.parse(JSON.stringify(pageCloseMetricPayload));
    var ts = Date.now() * 1e6;
    if (payload.resourceMetrics && payload.resourceMetrics[0] && payload.resourceMetrics[0].scopeMetrics) {
      var dp = payload.resourceMetrics[0].scopeMetrics[0].metrics[0].sum.dataPoints[0];
      dp.startTimeUnixNano = ts;
      dp.timeUnixNano = ts;
    }
    var url = '${_}/${g.fV.USER_CLOSED_PAGE}';
    var blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    if (navigator.sendBeacon) navigator.sendBeacon(url, blob);
  }

  function sendTabInactiveMetric() {
    if (document.visibilityState !== 'hidden') return;
    var payload = JSON.parse(JSON.stringify(tabInactiveMetricPayload));
    var ts = Date.now() * 1e6;
    if (payload.resourceMetrics && payload.resourceMetrics[0] && payload.resourceMetrics[0].scopeMetrics) {
      var dp = payload.resourceMetrics[0].scopeMetrics[0].metrics[0].sum.dataPoints[0];
      dp.startTimeUnixNano = ts;
      dp.timeUnixNano = ts;
      dp.attributes.push(
        { key: '${g.iX}.${g.Pe.SESSION_ACTIVE_DURATION_MS}', value: { stringValue: String(Date.now() - sessionStartTime) } },
        { key: '${g.iX}.${g.Pe.CLICK_COUNT}', value: { stringValue: String(interactionClickCount) } },
        { key: '${g.iX}.${g.Pe.IS_ACTIVE}', value: { stringValue: String(userIsActiveSent) } }
      );
      
    }
    fetch('${_}/${g.fV.USER_TAB_INACTIVE}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(function() {});
  }

  function sendTabActiveMetric() {
    if (document.visibilityState !== 'visible') return;
    var payload = JSON.parse(JSON.stringify(tabActiveMetricPayload));
    var ts = Date.now() * 1e6;
    if (payload.resourceMetrics && payload.resourceMetrics[0] && payload.resourceMetrics[0].scopeMetrics) {
      var dp = payload.resourceMetrics[0].scopeMetrics[0].metrics[0].sum.dataPoints[0];
      dp.startTimeUnixNano = ts;
      dp.timeUnixNano = ts;
      dp.attributes.push(
        { key: '${g.iX}.${g.Pe.VISIBILITY}', value: { stringValue: document.visibilityState } },
        { key: '${g.iX}.${g.Pe.CLICK_COUNT}', value: { stringValue: String(interactionClickCount) } },
        { key: '${g.iX}.${g.Pe.SESSION_ACTIVE_DURATION_MS}', value: { stringValue: String(Date.now() - sessionStartTime) } },
        { key: '${g.iX}.${g.Pe.IS_ACTIVE}', value: { stringValue: String(userIsActiveSent) } }
      );
    }
    fetch('${_}/${g.fV.USER_TAB_ACTIVE}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function() {});
  }

  var tabActiveSchedule = ${JSON.stringify(m)};
  tabActiveSchedule.forEach(function(delay) {
    setTimeout(sendTabActiveMetric, delay);
  });

  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') sendTabInactiveMetric();
  }

  function isButtonOrInteractive(target) {
    if (!target || !target.closest) return null;
    var btn = target.closest('button') || target.closest('[role="button"]') || target.closest('a[href]') || target.closest('[data-test*="Button"]') || target.closest('[data-test*="goNext"]');
    return btn || null;
  }

  function isTargetCTA(target) {
    if (!target || !target.closest) return false;
    return !!(target.closest('[data-test*="_option"]') || target.closest('[role="radio"]') || target.closest('[data-test*="goNext"]'));
  }

  function postponeSsrClick(interactiveEl) {
    window[stateKey].pendingClickTarget = interactiveEl;

    // Show loader overlay
    var wrapper = document.createElement('div');
    wrapper.id = '${s}';
    wrapper.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:var(--backgroundPrimaryColor,#fff);z-index:9999';
    wrapper.innerHTML = '<div style="color:var(--themePrimaryColor,#8A1700)"><svg width="50" height="50" viewBox="0 0 42 42" style="animation:ssrSpin 1s linear infinite"><g transform="translate(3 3)" stroke-width="5" fill="none" fill-rule="evenodd"><circle stroke-opacity="0.5" cx="18" cy="18" r="18" stroke="currentColor"/><path d="M22.592 35.404c9.61-2.535 15.348-12.385 12.812-21.996" stroke="currentColor"/></g></svg></div>';
    var style = document.createElement('style');
    style.textContent = '@keyframes ssrSpin{to{transform:rotate(360deg)}}';
    document.head.appendChild(style);
    document.body.appendChild(wrapper);
  }

  function handleClickBeforeHydration(e) {
    if (window[stateKey].hydrated) {
      document.removeEventListener('click', handleClickBeforeHydration, true);
      return;
    }

    var interactiveEl = isButtonOrInteractive(e.target);
    if (!interactiveEl) return;

    sendSsrClickBeforePageLoadedMetric(isTargetCTA(e.target));

    document.removeEventListener('click', handleClickBeforeHydration, true);

    postponeSsrClick(interactiveEl);
  }

  document.addEventListener('click', handleClickBeforeHydration, true);
  document.addEventListener('click', countClick, true);
  document.addEventListener('click', sendUserIsActiveMetric, true);
  document.addEventListener('touchstart', sendUserIsActiveMetric, true);
  document.addEventListener('pointerdown', sendUserIsActiveMetric, true);
  document.addEventListener('visibilitychange', handleVisibilityChange);

  window.addEventListener('pagehide', sendPageCloseMetric);
  window.addEventListener('unload', sendPageCloseMetric);
})();
`},[]);return(0,c.jsx)(u(),{id:"ssr-click-capture",strategy:"beforeInteractive",dangerouslySetInnerHTML:{__html:t}})}},190840:(e,t,r)=>{"use strict";r.d(t,{E7:()=>c,JU:()=>o,NB:()=>l,R1:()=>p,gA:()=>s,gx:()=>u});var a=r(226924),i=r(837376),n=r(841719);let s={renderedWidth:{mobile:"90vw",tablet:"75vw",desktop:"50vw"}},o={renderedWidth:"40px",sizeRange:a.Vs.ExtraSmall},l={renderedWidth:"80px",sizeRange:a.Vs.Small},c={renderedWidth:{mobile:"40vw",tablet:"32vw",desktop:"255px"}},d={renderedWidth:{mobile:"167px",tablet:"378px",desktop:"378px"}},u={[i.o_.BIG_IMAGE]:{renderedWidth:{mobile:"90vw",tablet:"80vw",desktop:"445px"}},[i.o_.IMAGE_AND_TEXT]:{renderedWidth:{mobile:"90vw",tablet:"90vw",desktop:"512px"}},[i.o_.BMI_IMAGES]:null,[i.o_.MOTIVATIONAL_CONTENT]:{renderedWidth:{mobile:"440px",tablet:"440px",desktop:"488px"}},[i.o_.CUSTOM]:null},p=({step:e,imageSetBuilder:t})=>{let r=[];if((0,n.Vi)(e)){let{questionStyle:a,questionType:d}=e,u=e.image;d===i.ep.SINGLE_SELECT&&a===i.ih.ADVANCED&&(u=e.image||e.questionImage||null),u&&r.push(t(u,s)),(0,n.Bc)(e)&&e.answerOptions&&r.push(...function({answerOptions:e,questionType:t,questionStyle:r},a){return e.filter(e=>e.icon).map(e=>{let n=e.icon;return r===i.ih.VERTICAL?a(n,c):t===i.ep.MULTI_SELECT&&r===i.ih.ADVANCED?a(n,l):a(n,o)})}(e,t))}if(e.type===i.Jw.INFO_PAGE){let a=u[e.innerType];!(0,n.lc)(e)&&e.image&&a&&r.push(t(e.image,a)),(0,n.lc)(e)||e.innerType!==i.o_.BMI_IMAGES||r.push(...[e.bmiUnderweightImage,e.bmiNormalImage,e.bmiOverweightImage,e.bmiObeseImage].map(e=>t(e,d)))}return r}},216278:(e,t,r)=>{"use strict";r.d(t,{y:()=>o});var a=r(948426),i=r(14232),n=r(837376),s=r(841719);let o=e=>{let t=(0,i.useMemo)(()=>{if(!e)return[];if((0,s.Vi)(e)){let t=new Map,r=e=>{!e?.name||t.has(e.name)||t.set(e.name,e)};for(let t of e.variables??[])r(t);if("answerOptions"in e&&Array.isArray(e.answerOptions))for(let t of e.answerOptions)for(let e of t?.variables??[])r(e);return Array.from(t.values())}return(0,s.wd)(e)?e.variables??[]:[]},[e]),{withVariables:r}=(0,a.SS)({variables:t});return(0,i.useMemo)(()=>e&&0!==t.length?((e,t)=>{if((0,s.Vi)(e)){let r,a;return r="string"==typeof e.image?t(e.image):e.image,a="string"==typeof e.questionImage?t(e.questionImage):e.questionImage,"answerOptions"in e&&Array.isArray(e.answerOptions)?{...e,image:r,questionImage:a,answerOptions:e.answerOptions.map(e=>({...e,icon:"string"==typeof e.icon?t(e.icon):e.icon,targetZone:"string"==typeof e.targetZone?t(e.targetZone):e.targetZone}))}:{...e,image:r,questionImage:a}}if(!(0,s.wd)(e))return e;let r={...e,image:"string"==typeof e.image?t(e.image):e.image};return e.innerType!==n.o_.BMI_IMAGES?r:{...r,bmiUnderweightImage:t(e.bmiUnderweightImage),bmiNormalImage:t(e.bmiNormalImage),bmiOverweightImage:t(e.bmiOverweightImage),bmiObeseImage:t(e.bmiObeseImage)}})(e,r):e||null,[e,t.length,r])}},240953:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(14232),i=r(674695),n=r(69106),s=r(747726),o=r(655084);let l=()=>{let e=(0,i.wA)(),t=(0,i.d4)(n.Ut),r=(0,i.d4)(n.Y2),l=r===o.r.IDLE||r===o.r.PENDING;return(0,a.useEffect)(()=>{r===o.r.IDLE&&e((0,s.Ly)())},[r,e]),{country:t,countryLoadingStatus:r,isCountryLoading:l}}},293731:(e,t,r)=>{"use strict";r.d(t,{A:()=>b});var a=r(637876),i=r(400776),n=r(958103),s=r.n(n),o=r(918847),l=r.n(o);r(14232);var c=r(64476),d=r(577779),u=r(532831),p=r(524612),g=r(872842),_=r(580678),m=r(914198),h=r(481531),v=r.n(h);let y=l()(()=>Promise.all([r.e(21960),r.e(17580),r.e(7332)]).then(r.bind(r,766725)),{loadableGenerated:{webpack:()=>[766725]}}),f=({className:e})=>(0,a.jsx)(u.A,{className:e}),S=({shouldShowLegalImpressum:e})=>(0,a.jsx)(p.A,{shouldShowLegalImpressum:e}),b=({children:e,renderHeader:t=f,dataPage:r="general",dataPageTest:n,styles:o,hideLegalLinks:l=!1,showLegalDivider:u=!1,showLegalImpressum:p=!1,renderFooterLegalNavigation:h=S})=>{(0,m.l)();let b=null===t;return(0,_.F)(),(0,a.jsxs)("div",{className:s()(b?v().pageContainerNoHeader:v().pageContainer),"data-page":r,"data-page-test":n,id:i.u,style:o,children:[t&&t({}),e,!l&&(0,a.jsxs)(a.Fragment,{children:[u&&(0,a.jsx)(d.A,{className:v().divider}),(0,a.jsx)("div",{className:v().legals,children:h({shouldShowLegalImpressum:p})})]}),(0,a.jsx)("div",{id:c.h}),(0,a.jsx)(g.A,{}),(0,a.jsx)(y,{})]})}},309089:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(637876);r(14232);var i=r(674695),n=r(317574),s=r(354264),o=r.n(s);let l=()=>(0,i.d4)(n.tH)?(0,a.jsx)("div",{className:o().chinaGoldHeaderIndent}):(0,a.jsx)("div",{className:o().headerIndent})},354264:e=>{e.exports={headerIndent:"regular-header_headerIndent__jn5Ur",chinaGoldHeaderIndent:"regular-header_chinaGoldHeaderIndent__LFsAF",container:"regular-header_container__GtDBz",isTransparent:"regular-header_isTransparent__1EPXC",spaceBetween:"regular-header_spaceBetween__On586",burgerButton:"regular-header_burgerButton__7A2ca",logoContainer:"regular-header_logoContainer__I05hH",left:"regular-header_left__K83KI",logo:"regular-header_logo__iWX_J",ctaContainer:"regular-header_ctaContainer__WWIJ3",hideCtaOnMobile:"regular-header_hideCtaOnMobile__EW2Gr",pulsingButton:"regular-header_pulsingButton__RqouW",pulse:"regular-header_pulse__8VrXJ",show:"regular-header_show__hc4Il",showLCP:"regular-header_showLCP__nuf1G",hide:"regular-header_hide__825O_",smallScroll:"regular-header_smallScroll__dQcRP",bigScroll:"regular-header_bigScroll__RlPGX"}},374127:(e,t,r)=>{"use strict";r.d(t,{D:()=>a});let a=e=>e?e.trim().replace(/^\/+/,"").replace(/\s+/g,"_").toLowerCase():"generic_view"},378497:e=>{e.exports={uButton:"arrow-back_uButton__mXkF9",uGreenButton:"arrow-back_uGreenButton__VVTB_ arrow-back_uButton__mXkF9",uGreenWideButton:"arrow-back_uGreenWideButton__grRqU arrow-back_uGreenButton__VVTB_ arrow-back_uButton__mXkF9",uWideButton:"arrow-back_uWideButton__mUyMP arrow-back_uButton__mXkF9",uInput:"arrow-back_uInput__YY6SK",isInvalid:"arrow-back_isInvalid__kY30b",uContentCard:"arrow-back_uContentCard__7Xybp",uInputError:"arrow-back_uInputError__LjyxL",desktopOnly:"arrow-back_desktopOnly__HeHuz",mobileOnly:"arrow-back_mobileOnly___tmpR",legal:"arrow-back_legal__ZDAFZ",arrowBack:"arrow-back_arrowBack__MS4Hj"}},409940:e=>{e.exports={arrowBack:"header-back-button_arrowBack__UusQN",isWhite:"header-back-button_isWhite__xmx3i",show:"header-back-button_show__vCttE",showLCP:"header-back-button_showLCP__BjGPB",hide:"header-back-button_hide__ljAOd",smallScroll:"header-back-button_smallScroll__FpzxS",bigScroll:"header-back-button_bigScroll__kZPZ8"}},448914:(e,t,r)=>{"use strict";r.d(t,{P:()=>s,u:()=>n});var a=r(861208),i=r(343829);let n=(e=0)=>{try{return window.scrollTo({top:e,left:0,behavior:"smooth"}),!0}catch(e){i.F.captureError("Failed to execute scrollTo",{originalError:e,customGroup:"scroll_to_error"})}return!1},s=(e,t=a.hb)=>!!e&&n(e.getBoundingClientRect().top+window.scrollY-t)},481531:e=>{e.exports={pageContainer:"page_pageContainer__zY0JY",pageContainerNoHeader:"page_pageContainerNoHeader__5TsgJ page_pageContainer__zY0JY",legals:"page_legals___DaW5",divider:"page_divider__qFVvL"}},532831:(e,t,r)=>{"use strict";r.d(t,{m:()=>b.A,A:()=>S});var a=r(637876),i=r(226924),n=r(97655),s=r(958103),o=r.n(s);r(14232);var l=r(674695),c=r(73190),d=r(122822),u=r(339714),p=r(879126),g=r(434375),_=r(786335),m=r(115355),h=r(511797),v=r(48111),y=r(354264),f=r.n(y);let S=({className:e,dataTest:t,onGoBack:r,onCtaClick:s,withBurgerMenu:y,customLogo:S,children:b,isTransparent:C=!1,isWhiteColored:w=!1,rightNode:I,hideCtaOnMobile:E=!1,shouldCenterLogoOnDesktop:A=!0})=>{let T=(0,_.Z)(),N=(0,l.wA)(),{t:k}=(0,h.B)(),O=(0,m.n)(),M=A&&!r&&!y;return(0,a.jsxs)("div",{className:o()(f().container,{[f().spaceBetween]:!M},{[f().isTransparent]:C},e),"data-test":t||g.S.base(),children:[r&&(0,a.jsx)(p.A,{isWhiteColored:w,onClick:r,dataTest:g.S.backButton()}),(0,a.jsx)("div",{className:o()(f().logoContainer,{[f().left]:!M}),children:S||(0,a.jsx)(i._V,{className:f().logo,imageName:T,renderedWidth:{mobile:"86px",tablet:"118px"},alt:"BetterMe logo",dataTest:g.S.logo()})}),b,s&&(0,a.jsx)("div",{className:o()(f().ctaContainer,{[f().hideCtaOnMobile]:E}),children:(0,a.jsx)(n.A,{onClick:s,className:f().pulsingButton,dataTest:g.S.ctaButton(),children:k("buttonText:getMyPlan","Get my plan").toUpperCase()})}),y&&(0,a.jsx)(u.A,{onClick:()=>{O({metricName:v.fV.CHINA_FLOW_BURGER_CLICK}),N((0,d.p$)()),N((0,c.edy)(window.location.pathname))},className:f().burgerButton,color:w?"white":null,dataTest:g.S.burgerButton()}),I]})};var b=r(309089)},698193:(e,t,r)=>{"use strict";r.d(t,{A:()=>U});var a=r(637876),i=r(948426),n=r(64725);n.F8;class s extends n.cP{constructor(e,t,r){super(),this.store=e,this.getState=t,this.updateStateAction=r,this._latestState=null,this._unsubscribe=e.subscribe(()=>{let e=this.getState();e!==this._latestState&&(this._latestState=e,this.notifyUpdateListeners())})}updateState(e){this.store.dispatch(this.updateStateAction(e)),this.notifyUpdateListeners()}cleanup(){this._unsubscribe?.()}}class o extends s{constructor(e,t,r){super(e,t,r)}set(e){this.updateState(e)}get(){return this.getState()}}var l=r(215011),c=r(104866),d=r(14232),u=r(674695),p=r(172106),g=r(930709),_=r(374127),m=r(397722),h=r(837376),v=r(841719),y=r(73190),f=r(938222),S=r(254836),b=r(874891),C=r(487846),w=r(744252),I=r(536215),E=r(707822),A=r(581856),T=r(566766),N=r(882196),k=r(657363),O=r(317574),M=r(355965),x=r(240953),B=r(64349),P=r(117190),L=r(782812),V=r(258266),R=r(448914),D=r(48111);let U=({children:e})=>{let t=(0,u.wA)(),r=(0,L.rd)(),s=(0,u.Pj)(),{lang:U}=(0,V.Ay)();(0,x.A)();let{deviceMode:j}=(0,B.Ay)(),$=(0,d.useRef)(j);(0,d.useEffect)(()=>{$.current=j},[j]);let G=(0,u.d4)(w.Y4),J=(0,u.d4)(O.tH),W=(0,d.useRef)(new c.q$(s,()=>({isReady:!0,steps:(0,N.b8)(s.getState())}))),F=(0,d.useRef)(new l.J4({stepsRepository:W.current,questionTypesConfig:l.e4,reduxConfig:{store:s,getAnswersState:()=>{let{required:e,extra:t}=(0,A.Fw)(s.getState());return{required:e,extra:t}},actions:{saveExtraAnswerAction:({answer:e,questionId:t})=>(0,E.Vc)({key:t,value:e}),saveRequiredAnswerAction:({answer:e,contentKey:t})=>(0,E.YX)({key:t,value:e}),saveMultipleAnswersAction:({required:e,extra:t})=>(0,E.W5)({required:e,extra:t})}},onAnswerSaved:(e,r)=>{let a=function({item:e,answer:t}){if(!(0,v.Vi)(e))return null;let r=!!e?.contentKey,a=e?.questionType===h.ep.INPUT,i=r?m.A.REQUIRED:m.A.OPTIONAL,n="";if(a)n="0";else t&&(n=(t.type===c.YR.MULTIPLE_IDS||t.type===c.YR.SINGLE_ID||t.type===c.YR.NUMBER)&&t.value?.toString()||"");return{itemId:e.id.toString(),questionId:e.questionId.toString(),answerType:i,answerValue:n}}({item:e,answer:r});if(a){let{itemId:e,questionId:r,answerType:i,answerValue:n}=a;t((0,y.Kan)(e,r,i,n))}}})),H=(0,d.useRef)(new c.Lo({currentStepIndexStorage:new o(s,()=>(0,N.tx)(s.getState()),k.xP.setStep),conditionEvaluator:e=>{if("conditionVariable"in e){let t=e.conditionVariable;if(t){let e=(0,C.Rm)(s.getState()),r={...e,customValues:{...e.customValues,deviceMode:$.current,locale:U,ppType:null}},a=new i.RD({state:r}).resolveVariable(t);if(null!=a)return a}}return!0},repository:W.current,logger:new n.ze({level:n.l1.DEBUG,namespace:"QuizOnboardingNavigation"}),onStepChanged:({stepIndex:e,step:r,totalStepsLength:a})=>{(0,R.u)(0);let i=(0,S.m4)(s.getState());e===a-2&&i&&t((0,b.R)()),e===a-1&&t((0,T.Y2)());let n=(0,P.Y)(r);n&&t((0,f.Wk)(n));let o=(0,I.D)(s.getState());(0,D.Ay)({metricName:D.fV.USER_CHANGED_ONBOARDING_STEP,attributes:{...o,[D.Pe.STEP_INDEX]:String(e)},apiRouteMetricName:`${D.fV.USER_CHANGED_ONBOARDING_STEP}_${e}`})},onReturn:()=>{r.push(G)},onFinished:()=>{t((0,T.Ir)())}})),X=(0,d.useRef)(new c.pn(s,A.D,{setConsentData:E.Lg}));return(0,a.jsx)(c.e4,{navigationInstance:H.current,answersRepository:F.current,goNextDelay:g.s,children:(0,a.jsxs)(c.en,{consentsRepository:X.current,onConsentChanged:({agreed:e,step:r})=>{if(e){let{analyticsEvent:e}=r,a=(0,_.D)(e);t((0,y.dtN)(a))}},children:[J&&(0,a.jsx)(p.n,{pathname:M.V8}),e]})})}},861208:(e,t,r)=>{"use strict";r.d(t,{G4:()=>n,Xq:()=>a,hb:()=>i});let a=48,i=75,n=10},879126:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var a=r(637876),i=r(958103),n=r.n(i);r(14232);var s=r(674695),o=r(73190),l=r(378497),c=r.n(l);let d=({onClick:e,variant:t="full",className:r,dataTest:i})=>"short"===t?(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",className:r,"data-test":i,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.6295 16.0633C14.0045 15.7062 14.0045 15.1273 13.6295 14.7702L8.59157 9.97247L13.6526 5.15276C14.0276 4.79569 14.0276 4.21677 13.6526 3.8597C13.2777 3.50263 12.6698 3.50263 12.2948 3.8597L7.23377 8.67941L7.22695 8.67292L5.86915 9.96598L12.2717 16.0633C12.6467 16.4203 13.2546 16.4203 13.6295 16.0633Z",fill:"currentColor"})}):(0,a.jsx)("svg",{onClick:e,width:24,height:24,viewBox:"0 0 24 24",className:n()(c().arrowBack,r),"data-test":i,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.414 10.657L3.071 11 2 12.071l1.414 1.414 6.364 6.364a1 1 0 101.414-1.414L5.757 13h14.314a1 1 0 100-2H5.9l5.293-5.293a1 1 0 00-1.414-1.414l-6.364 6.364z"})});var u=r(409940),p=r.n(u);let g=({isWhiteColored:e=!1,onClick:t,dataTest:r})=>{let i=(0,s.wA)();return(0,a.jsx)(d,{className:n()(p().arrowBack,{[p().isWhite]:e}),onClick:()=>{t?.(),i((0,o.ZQX)(window.location.pathname))},dataTest:r})}},930709:(e,t,r)=>{"use strict";r.d(t,{q:()=>a,s:()=>i});let a=500,i=700}}]);
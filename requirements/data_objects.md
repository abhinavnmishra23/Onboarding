# AGENTS Guide - Onboarding_CLMKYC

## Data Objects Requirments for UI test cases

## HTML Page Source
 
 <html lang="en-US"><head> <meta name="viewport" content="initial-scale=1, width=device-width"> <meta name="description" content="WebPortal"> <script crossorigin="anonymous" integrity="sha384-20YTcj36tvz0KWU6znBSAuXl/MF+wZJIzBDrqWySLdITrkI7A+ke1cRjhiK86h1n" src="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/prerequisite/constellation-core-web.js?v=2513HFIX20260903122106"></script> <script crossorigin="anonymous" integrity="sha384-sNmqFVDNp/QNGYhggE/qoBchuvdoBa0jp1rs4zAxdORVy84bjnLcxA5J/RFM8KNW" src="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/main.js?v=2513HFIX20260903122106" defer=""></script> <script crossorigin="anonymous" integrity="sha384-HeEeincTu1wE82b/0I8U8Nas4H7qQRW0zcEPl4evKCW8HMk5oGS4AYiD609o3WBF" src="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/pega-bootstrap-component.js?v=2513HFIX20260903122106" defer=""></script>     <link rel="icon" type="image/png" sizes="32x32" href="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/static/icons/pegaicon32.png"> <link rel="icon" type="image/png" sizes="16x16" href="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/static/icons/pegaicon16.png"> <link rel="shortcut icon" href="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/static/icons/favicon.ico">     <noscript> <h1>Error</h1><p>Please allow Javascript to view the constellation Portal.</p> </noscript> <style data-styled="active" data-styled-version="5.3.6" nonce=""></style><style data-styled="active" data-styled-version="5.3.6" nonce=""></style><link rel="stylesheet" href="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/static/fonts/base-font.css" data-cosmos-global-style="true"><title>Client Onboarding - CLM/KYC 3</title></head>    <body> <app-root><div data-config-root="true" style="display: contents;"><div id="root-container"><div class="app-shell"><div data-app-region="true" aria-label="Skip navigation menu" class="sc-jSUZER iBHMOK sc-kPOpbv NknLX sc-iBYQkv cPDQqc" data-popover-id="_fq5vpxc5l" offset="0" data-popper-placement="bottom-end" style="position: fixed; inset: 24.1667px 873.333px auto auto;"><div class="sc-jDUNyp leDAvn sc-iBYQkv bHrpyz"><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">Go to main content</button></div><div class="sc-hYzpey lewzCA sc-iBYQkv ewzSCd"><span id="_q74bamsyr" class="sc-ksBlkl cOSRdK">Shortcuts</span><div role="list" aria-labelledby="_q74bamsyr" class="sc-fEXmlR gTOumr"><div role="listitem"><span class="sc-ksBlkl cIVJmY">Jump to toast</span><div class="sc-iBYQkv cCddkj"><kbd data-testid=":keyboard:" class="sc-gikAfH fIDDxM">Alt</kbd><kbd data-testid=":keyboard:" class="sc-gikAfH fIDDxM"><span aria-hidden="true">↵</span><span class="sc-dkrFOg iIrvBL">Enter</span></kbd></div></div><div role="listitem"><span class="sc-ksBlkl cIVJmY">Dismiss toast</span><div class="sc-iBYQkv cCddkj"><kbd data-testid=":keyboard:" class="sc-gikAfH fIDDxM">Alt</kbd><kbd data-testid=":keyboard:" class="sc-gikAfH fIDDxM">Q</kbd></div></div><div role="listitem"><span class="sc-ksBlkl cIVJmY">Next region</span><div class="sc-iBYQkv cCddkj"><kbd data-testid=":keyboard:" class="sc-gikAfH fIDDxM">F9</kbd></div></div><div role="listitem"><span class="sc-ksBlkl cIVJmY">Previous region</span><div class="sc-iBYQkv cCddkj"><kbd data-testid=":keyboard:" class="sc-gikAfH fIDDxM"><span aria-hidden="true">⇧</span><span class="sc-dkrFOg iIrvBL">Shift</span></kbd><kbd data-testid=":keyboard:" class="sc-gikAfH fIDDxM">F9</kbd></div></div></div></div></div><header class="sc-gmcCKa flaGiF sc-iBYQkv eZgcSw"><div class="sc-dMUtCB dTfRNu sc-iBYQkv gGfEZo"><button data-testid=":menu-button:" id="_30efrrfrp" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Switch application" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M5.89 4c.506 0 .966.185 1.335.555.37.37.553.831.553 1.34 0 .508-.184.97-.553 1.34a1.84 1.84 0 0 1-1.336.554c-.506 0-.967-.184-1.336-.554A1.851 1.851 0 0 1 4 5.895c0-.508.184-.97.553-1.34.37-.37.829-.554 1.336-.554Zm6.587 0c.507 0 .968.185 1.337.555.369.37.553.831.553 1.34 0 .508-.184.97-.553 1.34-.37.37-.83.554-1.337.554-.46 0-.92-.184-1.336-.554a1.853 1.853 0 0 1-.553-1.34c0-.509.184-.97.553-1.34.369-.369.83-.554 1.336-.554Zm6.634 3.788a1.84 1.84 0 0 1-1.336-.554 1.851 1.851 0 0 1-.553-1.34c0-.508.184-.97.553-1.34A1.84 1.84 0 0 1 19.111 4c.506 0 .967.185 1.336.555.369.37.553.83.553 1.34 0 .507-.184.969-.599 1.339-.368.37-.783.554-1.29.554ZM5.889 10.606c.507 0 .967.184 1.336.554.37.37.553.831.553 1.34 0 .508-.184.97-.553 1.34a1.84 1.84 0 0 1-1.336.554c-.506 0-.967-.184-1.336-.554A1.851 1.851 0 0 1 4 12.5c0-.508.184-.97.553-1.34.37-.37.829-.554 1.336-.554Zm6.588 0c.507 0 .968.184 1.337.554.369.37.553.831.553 1.34 0 .508-.184.97-.553 1.34-.37.37-.83.554-1.337.554-.506 0-.967-.184-1.336-.554a1.851 1.851 0 0 1-.553-1.34c0-.508.184-.97.553-1.34.37-.37.83-.554 1.336-.554Zm6.634 0c.506 0 .967.184 1.336.554.369.37.553.831.553 1.34 0 .508-.184.97-.553 1.34-.37.37-.829.554-1.336.554a1.84 1.84 0 0 1-1.336-.554 1.851 1.851 0 0 1-.553-1.34c0-.508.184-.97.553-1.34a1.84 1.84 0 0 1 1.336-.554ZM5.889 17.212c.507 0 .967.184 1.336.554.37.37.553.831.553 1.34 0 .508-.184.97-.553 1.34A1.84 1.84 0 0 1 5.889 21c-.506 0-.967-.185-1.336-.555A1.851 1.851 0 0 1 4 19.105c0-.507.184-.969.553-1.339.37-.37.829-.554 1.336-.554Zm6.588 0c.507 0 .968.184 1.337.554.369.37.553.831.553 1.34 0 .508-.184.97-.553 1.34-.37.37-.83.554-1.337.554-.506 0-.967-.185-1.336-.555a1.851 1.851 0 0 1-.553-1.34c0-.507.184-.969.553-1.339.415-.37.876-.554 1.336-.554Zm6.634 0c.506 0 .921.184 1.29.554.414.37.598.831.598 1.34 0 .508-.184.97-.553 1.34A1.843 1.843 0 0 1 19.11 21c-.507 0-.967-.185-1.336-.555a1.853 1.853 0 0 1-.553-1.34c0-.508.184-.969.553-1.339a1.84 1.84 0 0 1 1.336-.554Z"></path></svg></span></button></div><div class="sc-VFtFE dyrwHw"><a href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/home" class="sc-iBYQkv ivirzV"><div class="sc-hrCmsx jXtBlR"><img src="https://prod-cdn.constellation.pega.io/25.1.3-102459/react/prod/static/py-full-logo.svg" alt="" class="sc-grxQYx iacuEh"></div><span class="sc-dkrFOg iIrvBL sc-eAnmvA kRMSBO">CLM/KYC 3</span></a></div><div class="sc-iBYQkv jmIdJx"><form role="search" aria-label="Sitewide" class="sc-dfaysv gisCKg"><div class="sc-hpfkCd haYTHk sc-iBYQkv iflAky pega-search-input"><button data-testid=":menu-button:" id="_8svgfwr9s" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eHGMzm sc-hTRxPq Mjsxk pega-button pega-button-variant-secondary" type="button" aria-label="Search in All" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><span class="sc-ksBlkl cIVJmY">All</span><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M8 9.5h9l-4.402 6-4.597-6H8Z"></path></svg></span></button><input data-testid=":input:control" id="_0luofq2sp" autocomplete="off" aria-label="Enter a search" type="search" aria-autocomplete="list" aria-haspopup="listbox" class="sc-iJbNxu hiAXFf sc-gkSfol GqmKm sc-lhlUkk jkqtdf pega-input" value=""><button as="button" class="sc-hBxehG ivSvdv sc-kLgxMn jgEskc pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Search" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="m18.513 17.115 4.754 4.755.047.14c.14.232.186.42.186.512 0 .653-.326.979-.979.979-.186 0-.42-.094-.652-.28l-4.708-4.708c-1.77 1.445-3.776 2.144-6.06 2.144-2.656 0-4.894-.932-6.758-2.797-1.91-1.91-2.843-4.148-2.843-6.758 0-2.61.932-4.848 2.843-6.759C6.253 2.433 8.491 1.5 11.102 1.5c2.61 0 4.847.932 6.758 2.843 1.865 1.864 2.797 4.102 2.797 6.759 0 2.237-.7 4.242-2.144 6.013Zm-7.365 1.631c2.098 0 3.869-.746 5.36-2.237 1.492-1.492 2.238-3.263 2.238-5.36 0-2.099-.746-3.916-2.237-5.408-1.492-1.492-3.263-2.237-5.36-2.237-2.099 0-3.916.745-5.408 2.237-1.492 1.492-2.237 3.31-2.237 5.407 0 2.098.745 3.869 2.237 5.36 1.492 1.492 3.31 2.238 5.407 2.238Z"></path></svg></button></div><span id="_wszxgrdl7" class="sc-dkrFOg iIrvBL">Use arrow keys to move up and down the suggested results. </span></form></div><button type="button" aria-label="Account - abhinav.n.mishra" aria-expanded="false" aria-haspopup="menu" class="sc-jdrCGX frIfrW sc-iJnaPW gYFCcB" data-popover-target=""><div data-testid=":avatar:" role="img" shape="circle" aria-label="abhinav.n.mishra" class="sc-jOferD hpiedB">a</div></button></header><nav data-app-region="true" aria-label="Main" class="sc-jwKbUx hjoDCj sc-iBYQkv kZmjEc"><div tabindex="-1" class="sc-iQAVnG gKcjsg"><div class="sc-fTrzCy kcoqE"><ul class="sc-iMSIvx eaAImT"><li class="sc-gDiTby fSZxRT"><button type="button" aria-labelledby="_n85jt0reu  " aria-haspopup="menu" aria-expanded="false" class="sc-iJnaPW gYFCcB" aria-describedby="_ori6wt1ik" aria-owns="Q2xpZW50JTIwT25ib2FyZGluZw== S1lDJTIwUmV2aWV3 Q29tcGxpYW5jZSUyMFNjcmVlbmluZw== UmlzayUyMEFzc2Vzc21lbnQ= RmluYWwlMjBBcHByb3ZhbA==" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="m13.43 2.5-.001 9.069H22.5v1.861h-9.071v9.07h-1.906l-.001-9.07H2.5v-1.86l9.022-.001V2.5h1.907Z"></path></svg></span></div><span id="_n85jt0reu">Create</span></button></li></ul></div><div><ul class="sc-iMSIvx eaAImT"><li name="Home" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_luzphx7qw  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/home" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M24.359 12.616 12.828 2.14A.426.426 0 0 0 12.5 2a.426.426 0 0 0-.328.14L.64 12.616a.525.525 0 0 0-.141.372c0 .326.14.466.469.466.14 0 .234-.046.328-.14l2.062-1.862v10.104c0 .42.14.745.422 1.025.281.28.61.419 1.032.419h15.374c.422 0 .75-.14 1.032-.42.281-.279.422-.605.422-1.024V11.452l2.062 1.909c.14.046.234.093.328.093.328 0 .469-.14.469-.466 0-.14-.047-.28-.14-.372h-.001Z"></path></svg></span></div><span id="_luzphx7qw">Home</span></a></li><li name="My Work" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_zfbkvtluk  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/my-work" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M4.958.48v23.564c0 .335-.144.479-.48.479-.334 0-.478-.144-.478-.48V.48c0-.335.144-.478.479-.478.335 0 .479.143.479.478Zm15.23-.478H5.963v11.78h14.224c.432 0 .767-.143 1.054-.43.288-.288.432-.623.432-1.054V1.485c0-.431-.144-.766-.432-1.054A1.408 1.408 0 0 0 20.188 0v.002Z"></path></svg></span></div><span id="_zfbkvtluk">My Work</span></a></li><li name="Explore Data" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_9f888exp0  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/explore-data" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="m1.673 13.533 4.71-4.672a1.195 1.195 0 0 1-.135-.54c0-.404.135-.718.449-1.033.27-.27.583-.404.987-.404s.718.135 1.032.404c.27.315.404.63.404 1.034 0 .135-.045.314-.09.54l3.14 3.144c.045-.045.18-.045.314-.045.314 0 .583.09.897.314l5.294-5.21c-.628-1.753-1.704-3.236-3.275-4.358A8.971 8.971 0 0 0 10.106 1c-2.512 0-4.665.898-6.414 2.65C1.897 5.449 1 7.605 1 10.12c0 1.213.224 2.381.673 3.414v-.001Zm22.16 9.659-6.998-7.008c1.57-1.753 2.333-3.774 2.333-6.065a9.02 9.02 0 0 0-.224-2.022l-5.069 4.987c.045.044.045.18.045.314 0 .405-.135.764-.404 1.033-.27.27-.628.405-1.032.405s-.762-.135-1.032-.405-.404-.628-.404-1.033c0-.314.09-.584.314-.898l-2.96-2.92c-.315.134-.54.179-.719.179-.223 0-.448-.045-.673-.18l-4.89 4.897c.763 1.438 1.885 2.56 3.32 3.414a8.794 8.794 0 0 0 4.665 1.303c2.288 0 4.307-.763 6.056-2.336l6.999 7.008c.09.09.179.135.313.135.135 0 .27-.045.36-.135.223-.224.223-.45 0-.674Z"></path></svg></span></div><span id="_9f888exp0">Explore Data</span></a></li><li name="Dashboards" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_5y6lq7tya  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/dashboards" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M6.983 4.514v5.029c0 .39-.147.733-.39 1.025-.294.293-.635.44-1.075.44H1.514c-.44 0-.781-.147-1.074-.44A1.405 1.405 0 0 1 0 9.543V4.514c0-.44.147-.781.44-1.074.293-.293.634-.44 1.074-.44h4.004c.44 0 .781.147 1.074.44.244.293.39.634.39 1.074Zm7.519-1.513h-4.004c-.44 0-.781.146-1.074.44-.293.293-.44.634-.44 1.074v5.029c0 .39.147.732.44 1.025.293.292.634.44 1.074.44h4.004c.44 0 .781-.147 1.074-.44.293-.293.44-.635.44-1.025v-5.03c0-.439-.147-.78-.44-1.074A1.436 1.436 0 0 0 14.502 3Zm8.984 0h-4.004c-.44 0-.781.146-1.025.44-.293.293-.44.634-.44 1.074v5.029c0 .39.147.732.44 1.025.244.293.586.44 1.025.44h4.004c.44 0 .781-.147 1.074-.44.293-.293.44-.635.44-1.025v-5.03c0-.439-.147-.78-.44-1.074A1.436 1.436 0 0 0 23.486 3ZM5.518 14.035H1.514c-.44 0-.781.146-1.074.39-.293.293-.44.635-.44 1.075v5.028c0 .44.147.782.44 1.075.293.293.634.44 1.074.44h4.004c.44 0 .781-.147 1.074-.44a1.61 1.61 0 0 0 .39-1.075V15.5c0-.44-.146-.782-.39-1.075a1.611 1.611 0 0 0-1.074-.39Zm8.984 0h-4.004c-.44 0-.781.146-1.074.39-.293.293-.44.635-.44 1.075v5.028c0 .44.147.782.44 1.075.293.293.634.44 1.074.44h4.004c.44 0 .781-.147 1.074-.44.293-.293.44-.635.44-1.075V15.5c0-.44-.147-.782-.44-1.075a1.611 1.611 0 0 0-1.074-.39Zm8.984 0h-4.004c-.44 0-.781.146-1.025.39-.293.293-.44.635-.44 1.075v5.028c0 .44.147.782.44 1.075.244.293.586.44 1.025.44h4.004c.44 0 .781-.147 1.074-.44.293-.293.44-.635.44-1.075V15.5c0-.44-.147-.782-.44-1.075a1.611 1.611 0 0 0-1.074-.39Z"></path></svg></span></div><span id="_5y6lq7tya">Dashboards</span></a></li><li name="Client Onboarding" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_2wk3t9nc7  " aria-current="page" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings" data-popover-target=""><div class="sc-juxSYv hezVFq sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M14.78 16.82v-1.774a41.427 41.427 0 0 0 9.72-4.017l-.186 11.023c0 .42-.14.747-.419 1.027-.279.28-.604.421-1.023.421H1.942c-.419 0-.744-.14-1.023-.42A1.376 1.376 0 0 1 .5 22.051v-10.93A37.719 37.719 0 0 0 9.755 15l.28 1.821c0 .234.093.467.279.654.186.187.419.28.65.28h2.885a.917.917 0 0 0 .65-.28.925.925 0 0 0 .28-.654Zm9.534-10.042v3.27l-.232.14-.046.046c-4.977 2.663-8.884 4.017-11.628 4.157-2.744 0-6.605-1.4-11.628-4.157l-.046-.046-.232-.14v-3.27c0-.42.14-.747.418-1.027.28-.28.605-.42 1.024-.42h5.21v-1.45c0-.653.231-1.214.697-1.681.466-.467 1.024-.701 1.72-.701h5.675c.698 0 1.256.233 1.72.701a2.3 2.3 0 0 1 .699 1.681V5.33h5.21c.418 0 .743.14 1.023.42.279.281.418.608.418 1.028h-.002Zm-7.628-1.447V3.883c0-.42-.14-.747-.419-1.028a1.364 1.364 0 0 0-1.023-.42H9.57c-.42 0-.745.14-1.024.42-.28.28-.419.608-.419 1.028v1.448h8.559Z"></path></svg></span></div><span id="_2wk3t9nc7">Client Onboarding</span></a></li><li name="KYC Review" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_mqhme7v5o  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/kyc-reviews" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M6.928 4.406V2.443c0-.335.192-.479.527-.479h.479v-.479c0-.431.143-.766.43-1.054A1.408 1.408 0 0 1 9.42 0h5.843c.431 0 .766.144 1.054.431.287.288.43.623.43 1.054v.48h.48c.335 0 .526.143.526.478v1.963c0 .335-.191.48-.526.48h-9.77c-.336 0-.527-.145-.527-.48Zm13.267-1.484h-1.58c.047.191.095.383.095.526v.958c0 .432-.144.767-.431 1.054a1.408 1.408 0 0 1-1.054.431h-9.77c-.432 0-.767-.143-1.054-.43a1.408 1.408 0 0 1-.431-1.055v-.958c0-.143.047-.335.096-.526h-1.58c-.432 0-.767.144-1.055.431A1.408 1.408 0 0 0 3 4.407v18.63c0 .432.144.767.431 1.054.288.288.623.432 1.054.432h15.709c.431 0 .766-.144 1.054-.432.287-.287.43-.622.43-1.053V4.407a1.41 1.41 0 0 0-.43-1.054 1.408 1.408 0 0 0-1.054-.431Z"></path></svg></span></div><span id="_mqhme7v5o">KYC Review</span></a></li><li name="Compliance Screening" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_v7lzzquqo  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/compliance-screenings" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M22.594 1H2v10.776c0 2.394 1.102 4.933 3.352 7.662 2.251 2.73 4.55 4.119 6.945 4.119 2.394 0 4.694-1.389 6.944-4.119 2.251-2.73 3.353-5.268 3.353-7.662V1ZM12.297 20.636c-1.677 0-3.352-.958-4.933-2.873-1.628-1.916-2.442-3.736-2.442-5.508V4.448c0-.335.191-.526.526-.526h4.886c.335 0 .479.191.479.526 0 .336-.144.48-.48.48H5.928v7.327c0 1.484.72 3.113 2.156 4.789 1.389 1.724 2.826 2.586 4.215 2.586.335 0 .479.143.479.479 0 .335-.144.526-.48.526Z"></path></svg></span></div><span id="_v7lzzquqo">Compliance Screening</span></a></li><li name="Risk Assessment" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_wz44cnhxq  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/risk-assessments" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M20.93 3.592C18.535 1.198 15.662 0 12.26 0c-3.4 0-6.273 1.198-8.668 3.592C1.198 5.987 0 8.86 0 12.261a12.6 12.6 0 0 0 .623 3.88l.096-.096L5.89 10.92c.24-.239.432-.239.67 0l3.64 3.592 6.658-6.657h-6.657c-.336 0-.527-.143-.527-.478 0-.383.191-.575.527-.575h7.806c.047-.048.144 0 .287.047.144.048.24.192.288.335.047.048.047.144.047.288v7.71c0 .384-.143.576-.478.576-.336 0-.48-.192-.48-.575V8.526l-7.135 7.088c-.24.24-.48.24-.719 0l-3.592-3.592-5.173 5.124c.91 2.203 2.395 3.975 4.454 5.316 2.012 1.39 4.263 2.06 6.753 2.06 3.4 0 6.274-1.198 8.669-3.592 2.394-2.395 3.592-5.268 3.592-8.67 0-3.4-1.198-6.273-3.592-8.668Z"></path></svg></span></div><span id="_wz44cnhxq">Risk Assessment</span></a></li><li name="Final Approval" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_k2gpefwx4  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/final-approvals" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M22.598 4.405v1.246c0 1.101-.239 1.963-.766 2.634a4.236 4.236 0 0 1-1.437 1.15.57.57 0 0 1-.479-.048c-.143-.096-.239-.24-.239-.383V4.406c0-.335.144-.479.48-.479h1.963c.335 0 .478.144.478.48v-.002ZM9.332 21.6h5.89c.336 0 .48.144.48.48 0 .334-.144.478-.48.478h-5.89c-.335 0-.479-.144-.479-.479 0-.335.144-.479.479-.479ZM4.926 4.405v5.268c-.814-.239-1.533-.67-2.107-1.34a4.437 4.437 0 0 1-.862-2.442V4.406c0-.335.191-.479.527-.479h1.963c.335 0 .479.144.479.48v-.002Zm18.151-1.484h-2.92c-.336 0-.527-.144-.527-.479V.958a.946.946 0 0 0-.288-.67.946.946 0 0 0-.67-.288H5.932a.946.946 0 0 0-.67.287.837.837 0 0 0-.335.67v1.485c0 .335-.143.48-.479.48h-2.97c-.334 0-.478.19-.478.526v2.299c0 1.15.335 2.155 1.005 3.065.72 1.005 1.629 1.58 2.73 1.82.24.047.335.19.383.334a6.714 6.714 0 0 0 1.724 3.257c.814.91 1.772 1.58 2.874 1.964.287.096.382.287.335.575l-.527 2.49a.466.466 0 0 1-.479.383H8.04c-.383 0-.67.192-.862.575L5.98 23.18c-.047.191-.096.287-.096.335 0 .239.096.479.336.719a.946.946 0 0 0 .67.287h10.776a.977.977 0 0 0 .718-.287.973.973 0 0 0 .288-.72.687.687 0 0 0-.096-.334l-1.15-2.97c-.19-.383-.478-.575-.91-.575h-.957a.467.467 0 0 1-.48-.383l-.574-2.442c-.048-.287.047-.479.335-.575a7.626 7.626 0 0 0 2.92-2.012c.815-.861 1.39-1.915 1.677-3.208a.467.467 0 0 1 .383-.335c1.102-.288 2.06-.91 2.826-1.916.623-.814.91-1.868.91-3.065V3.45c0-.336-.143-.527-.479-.527Z"></path></svg></span></div><span id="_k2gpefwx4">Final Approval</span></a></li><li name="Records Manager" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_ryhgbfy4z  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/records-manager" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M19.625 7.705c1.963-.766 2.97-1.676 2.97-2.778 0-1.101-1.006-2.011-3.018-2.778C17.566 1.383 15.123 1 12.297 1c-2.825 0-5.267.383-7.279 1.15-2.012.766-3.017 1.676-3.017 2.777C2 6.03 3.006 6.94 5.018 7.705c1.963.767 4.406 1.15 7.28 1.15 2.873 0 5.316-.383 7.327-1.15Zm0 0c1.963-.766 2.97-1.676 2.97-2.778 0-1.101-1.006-2.011-3.018-2.778C17.566 1.383 15.123 1 12.297 1c-2.825 0-5.267.383-7.279 1.15-2.012.766-3.017 1.676-3.017 2.777C2 6.03 3.006 6.94 5.018 7.705c1.963.767 4.406 1.15 7.28 1.15 2.873 0 5.316-.383 7.327-1.15Zm2.97 3.88v2.346c0 1.198-1.006 2.203-3.018 3.017-2.011.814-4.454 1.246-7.28 1.246-2.825 0-5.267-.431-7.279-1.246-2.012-.814-3.017-1.82-3.017-3.017v-2.347c.479.91 1.676 1.677 3.592 2.251 1.916.623 4.166.91 6.705.91 2.538 0 4.789-.287 6.704-.91 1.916-.575 3.114-1.34 3.593-2.25Zm0-4.886v3.065c0 1.102-1.006 2.06-3.018 2.873-2.011.815-4.454 1.198-7.28 1.198-2.825 0-5.267-.383-7.279-1.198-2.012-.814-3.017-1.771-3.017-2.873V6.7c.479.91 1.676 1.628 3.64 2.251 1.915.623 4.118.91 6.657.91 2.538 0 4.741-.287 6.704-.91 1.916-.623 3.114-1.34 3.593-2.25Zm0 9.1v4.167c-.192 1.005-1.293 1.868-3.258 2.586-1.964.718-4.31 1.053-7.04 1.053-2.73 0-5.077-.335-7.04-1.053-1.963-.72-3.065-1.58-3.257-2.586v-4.167c.479.958 1.677 1.772 3.64 2.395 1.915.622 4.119.958 6.657.958 2.538 0 4.741-.336 6.705-.958 1.915-.623 3.113-1.437 3.592-2.395Z"></path></svg></span></div><span id="_ryhgbfy4z">Records Manager</span></a></li><li name="CLM/KYC – Client Onboarding for Financial Services Agent" class="sc-gDiTby fSZxRT"><a data-testid=":link:" aria-labelledby="_51ulgj82v  " as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M22.5 9.5a1 1 0 0 1 .993.883l.007.117v4a1 1 0 0 1-1.993.117L21.5 14.5v-4a1 1 0 0 1 1-1Zm-4-3a1 1 0 0 1 .993.883l.007.117v10a1 1 0 0 1-1.993.117L17.5 17.5v-10a1 1 0 0 1 1-1Zm-4-4a1 1 0 0 1 .993.883l.007.117v18a1 1 0 0 1-1.993.117L13.5 21.5v-18a1 1 0 0 1 1-1Zm-4 6a1 1 0 0 1 .993.883l.007.117v6a1 1 0 0 1-1.993.117L9.5 15.5v-6a1 1 0 0 1 1-1ZM6.5 5a1 1 0 0 1 .993.883L7.5 6v13a1 1 0 0 1-1.993.117L5.5 19V6a1 1 0 0 1 1-1Zm-4 5.5a1 1 0 0 1 .993.883l.007.117v2a1 1 0 0 1-1.993.117L1.5 13.5v-2a1 1 0 0 1 1-1Z"></path></svg></span></div><span id="_51ulgj82v">CLM/KYC – Client Onboarding for Financial Services Agent</span></a></li></ul></div><div class="sc-fVDIyA caWKol"></div></div><div class="sc-hKnpzZ EFkOe"><ul class="sc-iMSIvx eaAImT"><li name="Notifications" class="sc-gDiTby fSZxRT"><button type="button" aria-labelledby="_k5zg8ld6n  " class="sc-iJnaPW gYFCcB" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="m20.826 14.992 1.255 1.201c.28.267.419.579.419.934v.801c0 .4-.14.712-.419.98a1.4 1.4 0 0 1-1.023.4H3.942a1.4 1.4 0 0 1-1.023-.4 1.28 1.28 0 0 1-.419-.98v-.8c0-.356.14-.668.419-.935l1.255-1.2c.14-.179.233-.357.28-.535l.976-6.63c.232-1.646 1.024-3.026 2.372-4.138A7.213 7.213 0 0 1 12.5 2c1.72 0 3.301.578 4.65 1.69 1.396 1.157 2.186 2.536 2.42 4.183l.976 6.585c.046.178.14.356.279.534Zm-11.628 5.25h6.604a3.386 3.386 0 0 1-1.116 1.957c-.604.534-1.349.801-2.186.801-.836 0-1.58-.267-2.185-.8a3.386 3.386 0 0 1-1.116-1.958h-.001Z"></path></svg></span></div><span id="_k5zg8ld6n">Notifications</span></button></li><li name="Recents" class="sc-gDiTby fSZxRT"><button type="button" aria-labelledby="_17dckw3tx  " class="sc-iJnaPW gYFCcB" data-popover-target=""><div class="sc-juxSYv gizgcv sc-iBYQkv gAOSln"><span class="sc-lkkFJn kGzGLh"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M20.984 4.016C18.641 1.672 15.828.5 12.5.5 9.172.5 6.36 1.672 4.016 4.016 1.672 6.359.5 9.172.5 12.5c0 3.328 1.172 6.14 3.516 8.484C6.359 23.328 9.172 24.5 12.5 24.5c3.328 0 6.14-1.172 8.484-3.516 2.344-2.343 3.516-5.156 3.516-8.484 0-3.328-1.172-6.14-3.516-8.484Zm-4.172 12.327c0 .14-.046.234-.14.328a.425.425 0 0 1-.328.14.425.425 0 0 1-.328-.14l-3.844-3.844a.425.425 0 0 1-.14-.328V6.734c0-.328.14-.469.468-.469s.469.141.469.469v5.578l3.703 3.703c.094.047.14.187.14.328Z"></path></svg></span></div><span id="_17dckw3tx">Recents</span></button></li></ul></div><div class="sc-iBYQkv gGfEZo"><button as="button" class="sc-hBxehG eEvmtf sc-erbdlo cShlmX pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Expand navigation" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="m15.5 12.402-6 4.597V8z"></path></svg></button></div></nav><main aria-busy="false" data-app-region="true" class="sc-biLNch gtYCto"><div style="min-height: inherit;"><div class="sc-jowtIB jcjjtQ sc-iBYQkv kDeCDl"><header class="sc-cxiiTX grqrGl sc-iBYQkv jdqOhm"><div data-testid=":summary-item:" class="sc-jfvxQR oEuGj sc-fEXmlR isJDhe"><div data-testid=":summary-item:visual" class="sc-jfTVlA dudcuU sc-fEXmlR fHuGHh"><div class="sc-iBYQkv gkmMew sc-gpoSCe dwbsiH"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M14.78 16.82v-1.774a41.427 41.427 0 0 0 9.72-4.017l-.186 11.023c0 .42-.14.747-.419 1.027-.279.28-.604.421-1.023.421H1.942c-.419 0-.744-.14-1.023-.42A1.376 1.376 0 0 1 .5 22.051v-10.93A37.719 37.719 0 0 0 9.755 15l.28 1.821c0 .234.093.467.279.654.186.187.419.28.65.28h2.885a.917.917 0 0 0 .65-.28.925.925 0 0 0 .28-.654Zm9.534-10.042v3.27l-.232.14-.046.046c-4.977 2.663-8.884 4.017-11.628 4.157-2.744 0-6.605-1.4-11.628-4.157l-.046-.046-.232-.14v-3.27c0-.42.14-.747.418-1.027.28-.28.605-.42 1.024-.42h5.21v-1.45c0-.653.231-1.214.697-1.681.466-.467 1.024-.701 1.72-.701h5.675c.698 0 1.256.233 1.72.701a2.3 2.3 0 0 1 .699 1.681V5.33h5.21c.418 0 .743.14 1.023.42.279.281.418.608.418 1.028h-.002Zm-7.628-1.447V3.883c0-.42-.14-.747-.419-1.028a1.364 1.364 0 0 0-1.023-.42H9.57c-.42 0-.745.14-1.024.42-.28.28-.419.608-.419 1.028v1.448h8.559Z"></path></svg></div></div><div data-testid=":summary-item:primary" class="sc-fEXmlR eHgya-d sc-gScZFl eJOYsw"><h1 class="sc-ksBlkl bkhHFN">Client Onboarding</h1></div></div></header><div class="sc-gMHJKX iMHuTV sc-iBYQkv gpdjoV"><div class="sc-iLkLTN DgkCZ"><div class="sc-bnVMcY iUSgKV sc-iBYQkv jmBZTC"><div class="sc-bhhwZE eJPHta"><div dir="ltr" class="sc-iBYQkv ldZbRa sc-cfQIsQ LnsmZ"><div class="react-grid-layout" style="height: 944px;"><div class="sc-iBYQkv cPDQqc sc-bJYTlW react-grid-item cssTransforms react-resizable-hide react-resizable" dir="ltr" style="width: 386px; height: 272px; position: absolute; transform: translate(16px, 0px);"><div class="sc-fIzWTo frhfnN"><div class="sc-iBYQkv damcRU sc-bIquoJ hMuNxF"><div class="sc-iBYQkv kkmFIc sc-gfbwvm bfUDML"><div class="sc-iBYQkv hmDJhr sc-eGXPLf gcAxKq"><div data-testid="tile-wrapper" class="sc-QCRGo KJqYW"><div class="sc-iBYQkv iyCdVr sc-iVyiaF fdtBOW"><article role="none" class="sc-cUEOzv gjjtlN sc-iBYQkv grkAzG sc-eGXPLf gcAxKq"><header class="sc-dEVLtI hnTZlE sc-iBYQkv giUYVI"><div class="sc-iBYQkv gtrcRv"><div class="sc-iBYQkv eTeWvV"><div class="sc-iBYQkv gHZyaE"><div class="sc-iBYQkv hYSJbi"><h2 title="Distribution of Client Onboarding Across Channels" class="sc-ksBlkl cOSRdK sc-buoZyn dYMUif">Distribution of Client Onboarding Across Channels</h2></div></div></div></div><div><button data-testid=":menu-button:" id="_6g7fyb62x" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Actions - Distribution of Client Onboarding Across Channels" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></header><div class="sc-csDkEv hXpxru sc-iBYQkv grkAzG sc-eGXPLf gcAxKq"><div data-testid="tileContent" class="sc-iBYQkv gChdkV sc-inRRxd kUJQZr"><div class="sc-iBYQkv gGrbdV sc-iBddIK iaMtZc"><div id="mtls3ttrllr7e20gmye" class="sc-iBYQkv ldZbRa sc-hJEbIy kJcggF"><div class="sc-iBYQkv ldZbRa sc-cbsmVS exwhFO"><div class="sc-iBYQkv fvIpyo sc-cvNrnN goJNml chart-insight-tile" data-testid="legacyChartContent" dir="ltr"><div aria-label="Column chart showing (Count) Case ID by Onboarding channel. Chart is vertically oriented. In order to navigate around the chart's plot points, press enter and use your arrow keys to navigate. Use home and end keys to navigate to the first and last data point. When the chart has many data points, you may use the page up and page down keys to navigate to previous and next pages of data." role="application" tabindex="0" class="sc-iBYQkv gLhndj sc-gnUaVU bEietB" style="padding-bottom: 26px;"><div class="db-tile-tooltip force-hide"></div><div class="tile-root-element"><div class="axis-label y-axis" title="Count Case ID" style="width: 186px;">Count Case ID</div><svg class="tile-root-svg" width="354" height="186" focusable="false" aria-hidden="true"><g class="tile-svg-root-group" transform="translate(75, 5)"><g class="y axis left" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="currentColor" d="M-6,111H0V0H-6"></path><g class="tick" opacity="1" transform="translate(0,111)"><line stroke="currentColor" x2="277" x1="-3" style="stroke: rgb(0, 29, 84); stroke-opacity: 0.1; stroke-width: 2; shape-rendering: crispedges;"></line><text fill="currentColor" x="-10" dy="0.32em" y="0" transform="rotate(0, -10, 0)" style="text-anchor: end;">0</text></g><g class="tick" opacity="1" transform="translate(0,68.3076923076923)"><line stroke="currentColor" x2="277" x1="-3" style="stroke: rgb(0, 29, 84); stroke-opacity: 0.1; stroke-width: 1; shape-rendering: crispedges;"></line><text fill="currentColor" x="-10" dy="0.32em" y="0" transform="rotate(0, -10, 0)" style="text-anchor: end;">5</text></g><g class="tick" opacity="1" transform="translate(0,25.61538461538461)"><line stroke="currentColor" x2="277" x1="-3" style="stroke: rgb(0, 29, 84); stroke-opacity: 0.1; stroke-width: 1; shape-rendering: crispedges;"></line><text fill="currentColor" x="-10" dy="0.32em" y="0" transform="rotate(0, -10, 0)" style="text-anchor: end;">10</text></g></g><g class="x axis bottom" transform="translate(0,111)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="M0,6V0H274V6"></path><g class="tick" opacity="1" transform="translate(45.66666666666667,0)"><text fill="currentColor" y="10" dy="0.71em" x="0" transform="rotate(-30, 0, 10)" style="text-anchor: end;">Branch Assisted</text></g><g class="tick" opacity="1" transform="translate(137,0)"><text fill="currentColor" y="10" dy="0.71em" x="0" transform="rotate(-30, 0, 10)" style="text-anchor: end;">Digital</text></g><g class="tick" opacity="1" transform="translate(228.33333333333331,0)"><text fill="currentColor" y="10" dy="0.71em" x="0" transform="rotate(-30, 0, 10)" style="text-anchor: end;">N/A</text></g></g><g class="tile-plot-area-group" clip-path="url(#clip-path-mtls3ttrllr7e20gmye)"><g class="query-mtls3ttrllr7e20gmye plot-_count-_case-_i_d main"><g class="plot-sub-group bar-container"><path d="M 20.66666666666667 93.92307692307692 h 50 v 17.07692307692308 h -50 Z" aria-label="Branch Assisted, Count Case ID: 2" data-testid="column-chart-element" class="plot-entity column x-_branch-_assisted color-4-fill hand-cursor" tabindex="-1" role="button" data-a11y-primary-index="0"></path><path d="M 112 0 h 50 v 111 h -50 Z" aria-label="Digital, Count Case ID: 13" data-testid="column-chart-element" class="plot-entity column x-_digital color-4-fill hand-cursor" tabindex="-1" role="button" data-a11y-primary-index="1"></path><path d="M 203.33333333333331 102.46153846153847 h 50 v 8.538461538461533 h -50 Z" aria-label="N/A, Count Case ID: 1" data-testid="column-chart-element" class="plot-entity column x-_n__002f_a color-4-fill hand-cursor" tabindex="-1" role="button" data-a11y-primary-index="2"></path></g></g></g><defs><clipPath id="clip-path-mtls3ttrllr7e20gmye"><rect width="274" height="111"></rect></clipPath><clipPath id="clip-path-mtls3ttrllr7e20gmye-x-axis"><rect x="0" y="-111" width="274" height="181"></rect></clipPath><clipPath id="clip-path-mtls3ttrllr7e20gmye-y-axis"><rect x="-75" y="0" width="354" height="111"></rect></clipPath><clipPath id="clip-path-mtls3ttrllr7e20gmye-y-axis-right"><rect x="-274" y="0" width="279" height="111"></rect></clipPath></defs></g></svg></div><div class="tile-footer-label" title="Onboarding channel">Onboarding channel</div></div><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="sc-jyHmMH eyZPuI"><defs><filter id="mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"></feGaussianBlur><feOffset in="blur" dx="0" dy="0" result="offsetBlur"></feOffset><feMerge><feMergeNode in="offsetBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs></svg></div></div><style>
    /* FILL */
    #mtls3ttrllr7e20gmye .color-0-fill {
      fill: #fff
    }
    #mtls3ttrllr7e20gmye .color-0-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-0-fill.emitter:not(.stroke-highlighting) {
      fill: #e6e6e6
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-0-stroke {
      stroke: #fff
    }
    #mtls3ttrllr7e20gmye .color-0-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-0-stroke.emitter {
      stroke: #e6e6e6
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-0-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-0-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-0-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-0-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-0-color {
      color: #fff;
    }
    #mtls3ttrllr7e20gmye .color-0-background {
      background-color: #fff;
    }
    #mtls3ttrllr7e20gmye .color-0-background.highlighted,
    #mtls3ttrllr7e20gmye .color-0-background.emitter {
      background-color: #e6e6e6;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-1-fill {
      fill: #ffffff
    }
    #mtls3ttrllr7e20gmye .color-1-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-1-fill.emitter:not(.stroke-highlighting) {
      fill: #e6e6e6
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-1-stroke {
      stroke: #ffffff
    }
    #mtls3ttrllr7e20gmye .color-1-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-1-stroke.emitter {
      stroke: #e6e6e6
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-1-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-1-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-1-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-1-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-1-color {
      color: #ffffff;
    }
    #mtls3ttrllr7e20gmye .color-1-background {
      background-color: #ffffff;
    }
    #mtls3ttrllr7e20gmye .color-1-background.highlighted,
    #mtls3ttrllr7e20gmye .color-1-background.emitter {
      background-color: #e6e6e6;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-2-fill {
      fill: #000
    }
    #mtls3ttrllr7e20gmye .color-2-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-2-fill.emitter:not(.stroke-highlighting) {
      fill: #333
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-2-stroke {
      stroke: #000
    }
    #mtls3ttrllr7e20gmye .color-2-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-2-stroke.emitter {
      stroke: #333
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-2-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-2-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-2-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-2-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-2-color {
      color: #000;
    }
    #mtls3ttrllr7e20gmye .color-2-background {
      background-color: #000;
    }
    #mtls3ttrllr7e20gmye .color-2-background.highlighted,
    #mtls3ttrllr7e20gmye .color-2-background.emitter {
      background-color: #333;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-3-fill {
      fill: #000000
    }
    #mtls3ttrllr7e20gmye .color-3-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-3-fill.emitter:not(.stroke-highlighting) {
      fill: #333
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-3-stroke {
      stroke: #000000
    }
    #mtls3ttrllr7e20gmye .color-3-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-3-stroke.emitter {
      stroke: #333
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-3-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-3-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-3-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-3-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-3-color {
      color: #000000;
    }
    #mtls3ttrllr7e20gmye .color-3-background {
      background-color: #000000;
    }
    #mtls3ttrllr7e20gmye .color-3-background.highlighted,
    #mtls3ttrllr7e20gmye .color-3-background.emitter {
      background-color: #333;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-4-fill {
      fill: #005fa8
    }
    #mtls3ttrllr7e20gmye .color-4-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-4-fill.emitter:not(.stroke-highlighting) {
      fill: #004275
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-4-stroke {
      stroke: #005fa8
    }
    #mtls3ttrllr7e20gmye .color-4-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-4-stroke.emitter {
      stroke: #004275
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-4-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-4-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-4-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-4-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-4-color {
      color: #005fa8;
    }
    #mtls3ttrllr7e20gmye .color-4-background {
      background-color: #005fa8;
    }
    #mtls3ttrllr7e20gmye .color-4-background.highlighted,
    #mtls3ttrllr7e20gmye .color-4-background.emitter {
      background-color: #004275;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-5-fill {
      fill: #00a89a
    }
    #mtls3ttrllr7e20gmye .color-5-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-5-fill.emitter:not(.stroke-highlighting) {
      fill: #00756b
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-5-stroke {
      stroke: #00a89a
    }
    #mtls3ttrllr7e20gmye .color-5-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-5-stroke.emitter {
      stroke: #00756b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-5-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-5-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-5-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-5-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-5-color {
      color: #00a89a;
    }
    #mtls3ttrllr7e20gmye .color-5-background {
      background-color: #00a89a;
    }
    #mtls3ttrllr7e20gmye .color-5-background.highlighted,
    #mtls3ttrllr7e20gmye .color-5-background.emitter {
      background-color: #00756b;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-6-fill {
      fill: #ffb647
    }
    #mtls3ttrllr7e20gmye .color-6-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-6-fill.emitter:not(.stroke-highlighting) {
      fill: #ffa214
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-6-stroke {
      stroke: #ffb647
    }
    #mtls3ttrllr7e20gmye .color-6-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-6-stroke.emitter {
      stroke: #ffa214
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-6-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-6-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-6-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-6-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-6-color {
      color: #ffb647;
    }
    #mtls3ttrllr7e20gmye .color-6-background {
      background-color: #ffb647;
    }
    #mtls3ttrllr7e20gmye .color-6-background.highlighted,
    #mtls3ttrllr7e20gmye .color-6-background.emitter {
      background-color: #ffa214;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-7-fill {
      fill: #27823d
    }
    #mtls3ttrllr7e20gmye .color-7-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-7-fill.emitter:not(.stroke-highlighting) {
      fill: #1b5b2b
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-7-stroke {
      stroke: #27823d
    }
    #mtls3ttrllr7e20gmye .color-7-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-7-stroke.emitter {
      stroke: #1b5b2b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-7-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-7-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-7-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-7-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-7-color {
      color: #27823d;
    }
    #mtls3ttrllr7e20gmye .color-7-background {
      background-color: #27823d;
    }
    #mtls3ttrllr7e20gmye .color-7-background.highlighted,
    #mtls3ttrllr7e20gmye .color-7-background.emitter {
      background-color: #1b5b2b;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-8-fill {
      fill: #ff873d
    }
    #mtls3ttrllr7e20gmye .color-8-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-8-fill.emitter:not(.stroke-highlighting) {
      fill: #ff670a
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-8-stroke {
      stroke: #ff873d
    }
    #mtls3ttrllr7e20gmye .color-8-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-8-stroke.emitter {
      stroke: #ff670a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-8-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-8-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-8-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-8-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-8-color {
      color: #ff873d;
    }
    #mtls3ttrllr7e20gmye .color-8-background {
      background-color: #ff873d;
    }
    #mtls3ttrllr7e20gmye .color-8-background.highlighted,
    #mtls3ttrllr7e20gmye .color-8-background.emitter {
      background-color: #ff670a;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-9-fill {
      fill: #da4644
    }
    #mtls3ttrllr7e20gmye .color-9-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-9-fill.emitter:not(.stroke-highlighting) {
      fill: #c42927
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-9-stroke {
      stroke: #da4644
    }
    #mtls3ttrllr7e20gmye .color-9-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-9-stroke.emitter {
      stroke: #c42927
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-9-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-9-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-9-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-9-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-9-color {
      color: #da4644;
    }
    #mtls3ttrllr7e20gmye .color-9-background {
      background-color: #da4644;
    }
    #mtls3ttrllr7e20gmye .color-9-background.highlighted,
    #mtls3ttrllr7e20gmye .color-9-background.emitter {
      background-color: #c42927;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-10-fill {
      fill: #7d5fbf
    }
    #mtls3ttrllr7e20gmye .color-10-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-10-fill.emitter:not(.stroke-highlighting) {
      fill: #6343a8
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-10-stroke {
      stroke: #7d5fbf
    }
    #mtls3ttrllr7e20gmye .color-10-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-10-stroke.emitter {
      stroke: #6343a8
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-10-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-10-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-10-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-10-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-10-color {
      color: #7d5fbf;
    }
    #mtls3ttrllr7e20gmye .color-10-background {
      background-color: #7d5fbf;
    }
    #mtls3ttrllr7e20gmye .color-10-background.highlighted,
    #mtls3ttrllr7e20gmye .color-10-background.emitter {
      background-color: #6343a8;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-11-fill {
      fill: #ff8080
    }
    #mtls3ttrllr7e20gmye .color-11-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-11-fill.emitter:not(.stroke-highlighting) {
      fill: #ff4d4d
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-11-stroke {
      stroke: #ff8080
    }
    #mtls3ttrllr7e20gmye .color-11-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-11-stroke.emitter {
      stroke: #ff4d4d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-11-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-11-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-11-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-11-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-11-color {
      color: #ff8080;
    }
    #mtls3ttrllr7e20gmye .color-11-background {
      background-color: #ff8080;
    }
    #mtls3ttrllr7e20gmye .color-11-background.highlighted,
    #mtls3ttrllr7e20gmye .color-11-background.emitter {
      background-color: #ff4d4d;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-12-fill {
      fill: #8e5025
    }
    #mtls3ttrllr7e20gmye .color-12-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-12-fill.emitter:not(.stroke-highlighting) {
      fill: #66391a
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-12-stroke {
      stroke: #8e5025
    }
    #mtls3ttrllr7e20gmye .color-12-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-12-stroke.emitter {
      stroke: #66391a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-12-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-12-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-12-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-12-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-12-color {
      color: #8e5025;
    }
    #mtls3ttrllr7e20gmye .color-12-background {
      background-color: #8e5025;
    }
    #mtls3ttrllr7e20gmye .color-12-background.highlighted,
    #mtls3ttrllr7e20gmye .color-12-background.emitter {
      background-color: #66391a;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-13-fill {
      fill: #b0a19c
    }
    #mtls3ttrllr7e20gmye .color-13-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-13-fill.emitter:not(.stroke-highlighting) {
      fill: #998680
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-13-stroke {
      stroke: #b0a19c
    }
    #mtls3ttrllr7e20gmye .color-13-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-13-stroke.emitter {
      stroke: #998680
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-13-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-13-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-13-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-13-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-13-color {
      color: #b0a19c;
    }
    #mtls3ttrllr7e20gmye .color-13-background {
      background-color: #b0a19c;
    }
    #mtls3ttrllr7e20gmye .color-13-background.highlighted,
    #mtls3ttrllr7e20gmye .color-13-background.emitter {
      background-color: #998680;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-14-fill {
      fill: #75a1cc
    }
    #mtls3ttrllr7e20gmye .color-14-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-14-fill.emitter:not(.stroke-highlighting) {
      fill: #5088be
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-14-stroke {
      stroke: #75a1cc
    }
    #mtls3ttrllr7e20gmye .color-14-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-14-stroke.emitter {
      stroke: #5088be
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-14-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-14-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-14-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-14-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-14-color {
      color: #75a1cc;
    }
    #mtls3ttrllr7e20gmye .color-14-background {
      background-color: #75a1cc;
    }
    #mtls3ttrllr7e20gmye .color-14-background.highlighted,
    #mtls3ttrllr7e20gmye .color-14-background.emitter {
      background-color: #5088be;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-15-fill {
      fill: #80cbc5
    }
    #mtls3ttrllr7e20gmye .color-15-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-15-fill.emitter:not(.stroke-highlighting) {
      fill: #5cbcb4
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-15-stroke {
      stroke: #80cbc5
    }
    #mtls3ttrllr7e20gmye .color-15-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-15-stroke.emitter {
      stroke: #5cbcb4
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-15-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-15-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-15-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-15-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-15-color {
      color: #80cbc5;
    }
    #mtls3ttrllr7e20gmye .color-15-background {
      background-color: #80cbc5;
    }
    #mtls3ttrllr7e20gmye .color-15-background.highlighted,
    #mtls3ttrllr7e20gmye .color-15-background.emitter {
      background-color: #5cbcb4;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-16-fill {
      fill: #ffd494
    }
    #mtls3ttrllr7e20gmye .color-16-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-16-fill.emitter:not(.stroke-highlighting) {
      fill: #ffc061
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-16-stroke {
      stroke: #ffd494
    }
    #mtls3ttrllr7e20gmye .color-16-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-16-stroke.emitter {
      stroke: #ffc061
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-16-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-16-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-16-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-16-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-16-color {
      color: #ffd494;
    }
    #mtls3ttrllr7e20gmye .color-16-background {
      background-color: #ffd494;
    }
    #mtls3ttrllr7e20gmye .color-16-background.highlighted,
    #mtls3ttrllr7e20gmye .color-16-background.emitter {
      background-color: #ffc061;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-17-fill {
      fill: #84b390
    }
    #mtls3ttrllr7e20gmye .color-17-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-17-fill.emitter:not(.stroke-highlighting) {
      fill: #64a074
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-17-stroke {
      stroke: #84b390
    }
    #mtls3ttrllr7e20gmye .color-17-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-17-stroke.emitter {
      stroke: #64a074
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-17-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-17-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-17-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-17-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-17-color {
      color: #84b390;
    }
    #mtls3ttrllr7e20gmye .color-17-background {
      background-color: #84b390;
    }
    #mtls3ttrllr7e20gmye .color-17-background.highlighted,
    #mtls3ttrllr7e20gmye .color-17-background.emitter {
      background-color: #64a074;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-18-fill {
      fill: #ffba8f
    }
    #mtls3ttrllr7e20gmye .color-18-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-18-fill.emitter:not(.stroke-highlighting) {
      fill: #ff9b5c
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-18-stroke {
      stroke: #ffba8f
    }
    #mtls3ttrllr7e20gmye .color-18-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-18-stroke.emitter {
      stroke: #ff9b5c
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-18-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-18-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-18-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-18-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-18-color {
      color: #ffba8f;
    }
    #mtls3ttrllr7e20gmye .color-18-background {
      background-color: #ffba8f;
    }
    #mtls3ttrllr7e20gmye .color-18-background.highlighted,
    #mtls3ttrllr7e20gmye .color-18-background.emitter {
      background-color: #ff9b5c;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-19-fill {
      fill: #ed9391
    }
    #mtls3ttrllr7e20gmye .color-19-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-19-fill.emitter:not(.stroke-highlighting) {
      fill: #e66865
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-19-stroke {
      stroke: #ed9391
    }
    #mtls3ttrllr7e20gmye .color-19-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-19-stroke.emitter {
      stroke: #e66865
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-19-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-19-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-19-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-19-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-19-color {
      color: #ed9391;
    }
    #mtls3ttrllr7e20gmye .color-19-background {
      background-color: #ed9391;
    }
    #mtls3ttrllr7e20gmye .color-19-background.highlighted,
    #mtls3ttrllr7e20gmye .color-19-background.emitter {
      background-color: #e66865;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-20-fill {
      fill: #beaee0
    }
    #mtls3ttrllr7e20gmye .color-20-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-20-fill.emitter:not(.stroke-highlighting) {
      fill: #a089d2
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-20-stroke {
      stroke: #beaee0
    }
    #mtls3ttrllr7e20gmye .color-20-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-20-stroke.emitter {
      stroke: #a089d2
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-20-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-20-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-20-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-20-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-20-color {
      color: #beaee0;
    }
    #mtls3ttrllr7e20gmye .color-20-background {
      background-color: #beaee0;
    }
    #mtls3ttrllr7e20gmye .color-20-background.highlighted,
    #mtls3ttrllr7e20gmye .color-20-background.emitter {
      background-color: #a089d2;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-21-fill {
      fill: #ffb3b3
    }
    #mtls3ttrllr7e20gmye .color-21-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-21-fill.emitter:not(.stroke-highlighting) {
      fill: #ff8080
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-21-stroke {
      stroke: #ffb3b3
    }
    #mtls3ttrllr7e20gmye .color-21-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-21-stroke.emitter {
      stroke: #ff8080
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-21-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-21-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-21-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-21-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-21-color {
      color: #ffb3b3;
    }
    #mtls3ttrllr7e20gmye .color-21-background {
      background-color: #ffb3b3;
    }
    #mtls3ttrllr7e20gmye .color-21-background.highlighted,
    #mtls3ttrllr7e20gmye .color-21-background.emitter {
      background-color: #ff8080;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-22-fill {
      fill: #bd997f
    }
    #mtls3ttrllr7e20gmye .color-22-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-22-fill.emitter:not(.stroke-highlighting) {
      fill: #ac7e5d
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-22-stroke {
      stroke: #bd997f
    }
    #mtls3ttrllr7e20gmye .color-22-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-22-stroke.emitter {
      stroke: #ac7e5d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-22-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-22-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-22-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-22-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-22-color {
      color: #bd997f;
    }
    #mtls3ttrllr7e20gmye .color-22-background {
      background-color: #bd997f;
    }
    #mtls3ttrllr7e20gmye .color-22-background.highlighted,
    #mtls3ttrllr7e20gmye .color-22-background.emitter {
      background-color: #ac7e5d;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-23-fill {
      fill: #cec7c5
    }
    #mtls3ttrllr7e20gmye .color-23-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-23-fill.emitter:not(.stroke-highlighting) {
      fill: #b7aca9
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-23-stroke {
      stroke: #cec7c5
    }
    #mtls3ttrllr7e20gmye .color-23-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-23-stroke.emitter {
      stroke: #b7aca9
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-23-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-23-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-23-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-23-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-23-color {
      color: #cec7c5;
    }
    #mtls3ttrllr7e20gmye .color-23-background {
      background-color: #cec7c5;
    }
    #mtls3ttrllr7e20gmye .color-23-background.highlighted,
    #mtls3ttrllr7e20gmye .color-23-background.emitter {
      background-color: #b7aca9;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-24-fill {
      fill: #db4642
    }
    #mtls3ttrllr7e20gmye .color-24-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-24-fill.emitter:not(.stroke-highlighting) {
      fill: #c52a25
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-24-stroke {
      stroke: #db4642
    }
    #mtls3ttrllr7e20gmye .color-24-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-24-stroke.emitter {
      stroke: #c52a25
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-24-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-24-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-24-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-24-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-24-color {
      color: #db4642;
    }
    #mtls3ttrllr7e20gmye .color-24-background {
      background-color: #db4642;
    }
    #mtls3ttrllr7e20gmye .color-24-background.highlighted,
    #mtls3ttrllr7e20gmye .color-24-background.emitter {
      background-color: #c52a25;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-25-fill {
      fill: #ff863d
    }
    #mtls3ttrllr7e20gmye .color-25-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-25-fill.emitter:not(.stroke-highlighting) {
      fill: #ff660a
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-25-stroke {
      stroke: #ff863d
    }
    #mtls3ttrllr7e20gmye .color-25-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-25-stroke.emitter {
      stroke: #ff660a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-25-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-25-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-25-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-25-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-25-color {
      color: #ff863d;
    }
    #mtls3ttrllr7e20gmye .color-25-background {
      background-color: #ff863d;
    }
    #mtls3ttrllr7e20gmye .color-25-background.highlighted,
    #mtls3ttrllr7e20gmye .color-25-background.emitter {
      background-color: #ff660a;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-26-fill {
      fill: #ffb646
    }
    #mtls3ttrllr7e20gmye .color-26-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-26-fill.emitter:not(.stroke-highlighting) {
      fill: #ffa213
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-26-stroke {
      stroke: #ffb646
    }
    #mtls3ttrllr7e20gmye .color-26-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-26-stroke.emitter {
      stroke: #ffa213
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-26-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-26-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-26-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-26-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-26-color {
      color: #ffb646;
    }
    #mtls3ttrllr7e20gmye .color-26-background {
      background-color: #ffb646;
    }
    #mtls3ttrllr7e20gmye .color-26-background.highlighted,
    #mtls3ttrllr7e20gmye .color-26-background.emitter {
      background-color: #ffa213;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-27-fill {
      fill: #fde980
    }
    #mtls3ttrllr7e20gmye .color-27-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-27-fill.emitter:not(.stroke-highlighting) {
      fill: #fce04e
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-27-stroke {
      stroke: #fde980
    }
    #mtls3ttrllr7e20gmye .color-27-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-27-stroke.emitter {
      stroke: #fce04e
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-27-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-27-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-27-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-27-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-27-color {
      color: #fde980;
    }
    #mtls3ttrllr7e20gmye .color-27-background {
      background-color: #fde980;
    }
    #mtls3ttrllr7e20gmye .color-27-background.highlighted,
    #mtls3ttrllr7e20gmye .color-27-background.emitter {
      background-color: #fce04e;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-28-fill {
      fill: #66cc66
    }
    #mtls3ttrllr7e20gmye .color-28-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-28-fill.emitter:not(.stroke-highlighting) {
      fill: #40bf40
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-28-stroke {
      stroke: #66cc66
    }
    #mtls3ttrllr7e20gmye .color-28-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-28-stroke.emitter {
      stroke: #40bf40
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-28-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-28-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-28-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-28-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-28-color {
      color: #66cc66;
    }
    #mtls3ttrllr7e20gmye .color-28-background {
      background-color: #66cc66;
    }
    #mtls3ttrllr7e20gmye .color-28-background.highlighted,
    #mtls3ttrllr7e20gmye .color-28-background.emitter {
      background-color: #40bf40;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-29-fill {
      fill: #7f92a1
    }
    #mtls3ttrllr7e20gmye .color-29-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-29-fill.emitter:not(.stroke-highlighting) {
      fill: #647989
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-29-stroke {
      stroke: #7f92a1
    }
    #mtls3ttrllr7e20gmye .color-29-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-29-stroke.emitter {
      stroke: #647989
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-29-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-29-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-29-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-29-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-29-color {
      color: #7f92a1;
    }
    #mtls3ttrllr7e20gmye .color-29-background {
      background-color: #7f92a1;
    }
    #mtls3ttrllr7e20gmye .color-29-background.highlighted,
    #mtls3ttrllr7e20gmye .color-29-background.emitter {
      background-color: #647989;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-30-fill {
      fill: #1c1c1c
    }
    #mtls3ttrllr7e20gmye .color-30-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-30-fill.emitter:not(.stroke-highlighting) {
      fill: #4f4f4f
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-30-stroke {
      stroke: #1c1c1c
    }
    #mtls3ttrllr7e20gmye .color-30-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-30-stroke.emitter {
      stroke: #4f4f4f
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-30-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-30-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-30-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-30-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-30-color {
      color: #1c1c1c;
    }
    #mtls3ttrllr7e20gmye .color-30-background {
      background-color: #1c1c1c;
    }
    #mtls3ttrllr7e20gmye .color-30-background.highlighted,
    #mtls3ttrllr7e20gmye .color-30-background.emitter {
      background-color: #4f4f4f;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-31-fill {
      fill: #004d94
    }
    #mtls3ttrllr7e20gmye .color-31-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-31-fill.emitter:not(.stroke-highlighting) {
      fill: #0082fa
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-31-stroke {
      stroke: #004d94
    }
    #mtls3ttrllr7e20gmye .color-31-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-31-stroke.emitter {
      stroke: #0082fa
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-31-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-31-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-31-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-31-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-31-color {
      color: #004d94;
    }
    #mtls3ttrllr7e20gmye .color-31-background {
      background-color: #004d94;
    }
    #mtls3ttrllr7e20gmye .color-31-background.highlighted,
    #mtls3ttrllr7e20gmye .color-31-background.emitter {
      background-color: #0082fa;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-32-fill {
      fill: #009487
    }
    #mtls3ttrllr7e20gmye .color-32-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-32-fill.emitter:not(.stroke-highlighting) {
      fill: #00fae4
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-32-stroke {
      stroke: #009487
    }
    #mtls3ttrllr7e20gmye .color-32-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-32-stroke.emitter {
      stroke: #00fae4
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-32-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-32-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-32-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-32-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-32-color {
      color: #009487;
    }
    #mtls3ttrllr7e20gmye .color-32-background {
      background-color: #009487;
    }
    #mtls3ttrllr7e20gmye .color-32-background.highlighted,
    #mtls3ttrllr7e20gmye .color-32-background.emitter {
      background-color: #00fae4;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-33-fill {
      fill: #feb13d
    }
    #mtls3ttrllr7e20gmye .color-33-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-33-fill.emitter:not(.stroke-highlighting) {
      fill: #fe9d0a
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-33-stroke {
      stroke: #feb13d
    }
    #mtls3ttrllr7e20gmye .color-33-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-33-stroke.emitter {
      stroke: #fe9d0a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-33-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-33-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-33-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-33-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-33-color {
      color: #feb13d;
    }
    #mtls3ttrllr7e20gmye .color-33-background {
      background-color: #feb13d;
    }
    #mtls3ttrllr7e20gmye .color-33-background.highlighted,
    #mtls3ttrllr7e20gmye .color-33-background.emitter {
      background-color: #fe9d0a;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-34-fill {
      fill: #1f7233
    }
    #mtls3ttrllr7e20gmye .color-34-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-34-fill.emitter:not(.stroke-highlighting) {
      fill: #35c257
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-34-stroke {
      stroke: #1f7233
    }
    #mtls3ttrllr7e20gmye .color-34-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-34-stroke.emitter {
      stroke: #35c257
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-34-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-34-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-34-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-34-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-34-color {
      color: #1f7233;
    }
    #mtls3ttrllr7e20gmye .color-34-background {
      background-color: #1f7233;
    }
    #mtls3ttrllr7e20gmye .color-34-background.highlighted,
    #mtls3ttrllr7e20gmye .color-34-background.emitter {
      background-color: #35c257;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-35-fill {
      fill: #ff741e
    }
    #mtls3ttrllr7e20gmye .color-35-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-35-fill.emitter:not(.stroke-highlighting) {
      fill: #ea5900
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-35-stroke {
      stroke: #ff741e
    }
    #mtls3ttrllr7e20gmye .color-35-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-35-stroke.emitter {
      stroke: #ea5900
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-35-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-35-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-35-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-35-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-35-color {
      color: #ff741e;
    }
    #mtls3ttrllr7e20gmye .color-35-background {
      background-color: #ff741e;
    }
    #mtls3ttrllr7e20gmye .color-35-background.highlighted,
    #mtls3ttrllr7e20gmye .color-35-background.emitter {
      background-color: #ea5900;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-36-fill {
      fill: #c72623
    }
    #mtls3ttrllr7e20gmye .color-36-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-36-fill.emitter:not(.stroke-highlighting) {
      fill: #9c1e1b
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-36-stroke {
      stroke: #c72623
    }
    #mtls3ttrllr7e20gmye .color-36-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-36-stroke.emitter {
      stroke: #9c1e1b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-36-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-36-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-36-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-36-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-36-color {
      color: #c72623;
    }
    #mtls3ttrllr7e20gmye .color-36-background {
      background-color: #c72623;
    }
    #mtls3ttrllr7e20gmye .color-36-background.highlighted,
    #mtls3ttrllr7e20gmye .color-36-background.emitter {
      background-color: #9c1e1b;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-37-fill {
      fill: #7151b4
    }
    #mtls3ttrllr7e20gmye .color-37-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-37-fill.emitter:not(.stroke-highlighting) {
      fill: #5a3f93
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-37-stroke {
      stroke: #7151b4
    }
    #mtls3ttrllr7e20gmye .color-37-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-37-stroke.emitter {
      stroke: #5a3f93
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-37-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-37-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-37-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-37-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-37-color {
      color: #7151b4;
    }
    #mtls3ttrllr7e20gmye .color-37-background {
      background-color: #7151b4;
    }
    #mtls3ttrllr7e20gmye .color-37-background.highlighted,
    #mtls3ttrllr7e20gmye .color-37-background.emitter {
      background-color: #5a3f93;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-38-fill {
      fill: #ff6e6e
    }
    #mtls3ttrllr7e20gmye .color-38-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-38-fill.emitter:not(.stroke-highlighting) {
      fill: #ff3b3b
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-38-stroke {
      stroke: #ff6e6e
    }
    #mtls3ttrllr7e20gmye .color-38-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-38-stroke.emitter {
      stroke: #ff3b3b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-38-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-38-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-38-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-38-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-38-color {
      color: #ff6e6e;
    }
    #mtls3ttrllr7e20gmye .color-38-background {
      background-color: #ff6e6e;
    }
    #mtls3ttrllr7e20gmye .color-38-background.highlighted,
    #mtls3ttrllr7e20gmye .color-38-background.emitter {
      background-color: #ff3b3b;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-39-fill {
      fill: #82481f
    }
    #mtls3ttrllr7e20gmye .color-39-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-39-fill.emitter:not(.stroke-highlighting) {
      fill: #593115
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-39-stroke {
      stroke: #82481f
    }
    #mtls3ttrllr7e20gmye .color-39-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-39-stroke.emitter {
      stroke: #593115
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-39-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-39-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-39-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-39-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-39-color {
      color: #82481f;
    }
    #mtls3ttrllr7e20gmye .color-39-background {
      background-color: #82481f;
    }
    #mtls3ttrllr7e20gmye .color-39-background.highlighted,
    #mtls3ttrllr7e20gmye .color-39-background.emitter {
      background-color: #593115;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-40-fill {
      fill: #a49590
    }
    #mtls3ttrllr7e20gmye .color-40-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-40-fill.emitter:not(.stroke-highlighting) {
      fill: #8d7a74
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-40-stroke {
      stroke: #a49590
    }
    #mtls3ttrllr7e20gmye .color-40-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-40-stroke.emitter {
      stroke: #8d7a74
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-40-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-40-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-40-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-40-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-40-color {
      color: #a49590;
    }
    #mtls3ttrllr7e20gmye .color-40-background {
      background-color: #a49590;
    }
    #mtls3ttrllr7e20gmye .color-40-background.highlighted,
    #mtls3ttrllr7e20gmye .color-40-background.emitter {
      background-color: #8d7a74;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-41-fill {
      fill: #1e578e
    }
    #mtls3ttrllr7e20gmye .color-41-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-41-fill.emitter:not(.stroke-highlighting) {
      fill: #153d64
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-41-stroke {
      stroke: #1e578e
    }
    #mtls3ttrllr7e20gmye .color-41-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-41-stroke.emitter {
      stroke: #153d64
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-41-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-41-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-41-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-41-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-41-color {
      color: #1e578e;
    }
    #mtls3ttrllr7e20gmye .color-41-background {
      background-color: #1e578e;
    }
    #mtls3ttrllr7e20gmye .color-41-background.highlighted,
    #mtls3ttrllr7e20gmye .color-41-background.emitter {
      background-color: #153d64;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-42-fill {
      fill: #0f776e
    }
    #mtls3ttrllr7e20gmye .color-42-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-42-fill.emitter:not(.stroke-highlighting) {
      fill: #1ad2c2
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-42-stroke {
      stroke: #0f776e
    }
    #mtls3ttrllr7e20gmye .color-42-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-42-stroke.emitter {
      stroke: #1ad2c2
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-42-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-42-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-42-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-42-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-42-color {
      color: #0f776e;
    }
    #mtls3ttrllr7e20gmye .color-42-background {
      background-color: #0f776e;
    }
    #mtls3ttrllr7e20gmye .color-42-background.highlighted,
    #mtls3ttrllr7e20gmye .color-42-background.emitter {
      background-color: #1ad2c2;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-43-fill {
      fill: #a94367
    }
    #mtls3ttrllr7e20gmye .color-43-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-43-fill.emitter:not(.stroke-highlighting) {
      fill: #843551
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-43-stroke {
      stroke: #a94367
    }
    #mtls3ttrllr7e20gmye .color-43-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-43-stroke.emitter {
      stroke: #843551
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-43-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-43-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-43-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-43-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-43-color {
      color: #a94367;
    }
    #mtls3ttrllr7e20gmye .color-43-background {
      background-color: #a94367;
    }
    #mtls3ttrllr7e20gmye .color-43-background.highlighted,
    #mtls3ttrllr7e20gmye .color-43-background.emitter {
      background-color: #843551;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-44-fill {
      fill: #6b498a
    }
    #mtls3ttrllr7e20gmye .color-44-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-44-fill.emitter:not(.stroke-highlighting) {
      fill: #513769
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-44-stroke {
      stroke: #6b498a
    }
    #mtls3ttrllr7e20gmye .color-44-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-44-stroke.emitter {
      stroke: #513769
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-44-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-44-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-44-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-44-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-44-color {
      color: #6b498a;
    }
    #mtls3ttrllr7e20gmye .color-44-background {
      background-color: #6b498a;
    }
    #mtls3ttrllr7e20gmye .color-44-background.highlighted,
    #mtls3ttrllr7e20gmye .color-44-background.emitter {
      background-color: #513769;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-45-fill {
      fill: #6e3e90
    }
    #mtls3ttrllr7e20gmye .color-45-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-45-fill.emitter:not(.stroke-highlighting) {
      fill: #532f6c
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-45-stroke {
      stroke: #6e3e90
    }
    #mtls3ttrllr7e20gmye .color-45-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-45-stroke.emitter {
      stroke: #532f6c
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-45-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-45-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-45-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-45-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-45-color {
      color: #6e3e90;
    }
    #mtls3ttrllr7e20gmye .color-45-background {
      background-color: #6e3e90;
    }
    #mtls3ttrllr7e20gmye .color-45-background.highlighted,
    #mtls3ttrllr7e20gmye .color-45-background.emitter {
      background-color: #532f6c;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-46-fill {
      fill: #e66342
    }
    #mtls3ttrllr7e20gmye .color-46-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-46-fill.emitter:not(.stroke-highlighting) {
      fill: #d8421d
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-46-stroke {
      stroke: #e66342
    }
    #mtls3ttrllr7e20gmye .color-46-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-46-stroke.emitter {
      stroke: #d8421d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-46-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-46-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-46-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-46-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-46-color {
      color: #e66342;
    }
    #mtls3ttrllr7e20gmye .color-46-background {
      background-color: #e66342;
    }
    #mtls3ttrllr7e20gmye .color-46-background.highlighted,
    #mtls3ttrllr7e20gmye .color-46-background.emitter {
      background-color: #d8421d;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-47-fill {
      fill: #cb3b59
    }
    #mtls3ttrllr7e20gmye .color-47-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-47-fill.emitter:not(.stroke-highlighting) {
      fill: #a72c46
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-47-stroke {
      stroke: #cb3b59
    }
    #mtls3ttrllr7e20gmye .color-47-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-47-stroke.emitter {
      stroke: #a72c46
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-47-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-47-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-47-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-47-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-47-color {
      color: #cb3b59;
    }
    #mtls3ttrllr7e20gmye .color-47-background {
      background-color: #cb3b59;
    }
    #mtls3ttrllr7e20gmye .color-47-background.highlighted,
    #mtls3ttrllr7e20gmye .color-47-background.emitter {
      background-color: #a72c46;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-48-fill {
      fill: #d53bb1
    }
    #mtls3ttrllr7e20gmye .color-48-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-48-fill.emitter:not(.stroke-highlighting) {
      fill: #b62795
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-48-stroke {
      stroke: #d53bb1
    }
    #mtls3ttrllr7e20gmye .color-48-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-48-stroke.emitter {
      stroke: #b62795
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-48-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-48-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-48-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-48-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-48-color {
      color: #d53bb1;
    }
    #mtls3ttrllr7e20gmye .color-48-background {
      background-color: #d53bb1;
    }
    #mtls3ttrllr7e20gmye .color-48-background.highlighted,
    #mtls3ttrllr7e20gmye .color-48-background.emitter {
      background-color: #b62795;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-49-fill {
      fill: #255c9c
    }
    #mtls3ttrllr7e20gmye .color-49-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-49-fill.emitter:not(.stroke-highlighting) {
      fill: #1b4473
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-49-stroke {
      stroke: #255c9c
    }
    #mtls3ttrllr7e20gmye .color-49-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-49-stroke.emitter {
      stroke: #1b4473
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-49-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-49-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-49-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-49-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-49-color {
      color: #255c9c;
    }
    #mtls3ttrllr7e20gmye .color-49-background {
      background-color: #255c9c;
    }
    #mtls3ttrllr7e20gmye .color-49-background.highlighted,
    #mtls3ttrllr7e20gmye .color-49-background.emitter {
      background-color: #1b4473;
    }
  
    /* FILL */
    #mtls3ttrllr7e20gmye .color-50-fill {
      fill: #73669d
    }
    #mtls3ttrllr7e20gmye .color-50-fill.highlighted:not(.stroke-highlighting),
    #mtls3ttrllr7e20gmye .color-50-fill.emitter:not(.stroke-highlighting) {
      fill: #5c517f
    }

    /* STROKE */
    #mtls3ttrllr7e20gmye .color-50-stroke {
      stroke: #73669d
    }
    #mtls3ttrllr7e20gmye .color-50-stroke.highlighted,
    #mtls3ttrllr7e20gmye .color-50-stroke.emitter {
      stroke: #5c517f
    }

    /* Highlighting using Drop-Shadow */
    #mtls3ttrllr7e20gmye .color-50-stroke.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-50-stroke.stroke-highlighting.emitter,
    #mtls3ttrllr7e20gmye .color-50-fill.stroke-highlighting.highlighted,
    #mtls3ttrllr7e20gmye .color-50-fill.stroke-highlighting.emitter {
      filter: url(#mtls3ttrllr7e20gmye-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3ttrllr7e20gmye .color-50-color {
      color: #73669d;
    }
    #mtls3ttrllr7e20gmye .color-50-background {
      background-color: #73669d;
    }
    #mtls3ttrllr7e20gmye .color-50-background.highlighted,
    #mtls3ttrllr7e20gmye .color-50-background.emitter {
      background-color: #5c517f;
    }
  </style><style>
    #mtls3ttrllr7e20gmye.db-tile {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    #mtls3ttrllr7e20gmye .db-tile-body,#mtls3ttrllr7e20gmye .db-tile-animation-tick,#mtls3ttrllr7e20gmye .db-tile-visible-legend,#mtls3ttrllr7e20gmye .db-tile-tooltip,#mtls3ttrllr7e20gmye .tile-no-data-watermark,#mtls3ttrllr7e20gmye .leaflet-bar a {
      background: #fff;
      color: #001d54;
    }
    #mtls3ttrllr7e20gmye .db-tile-zoom-box,#mtls3ttrllr7e20gmye .db-tile-pinch-zoom-box,#mtls3ttrllr7e20gmye .selection-chart-block .pega-radio-item:before,#mtls3ttrllr7e20gmye .selection-chart-block .circular-checkbox .circle {
      border-color: #001d54 !important
    }
    #mtls3ttrllr7e20gmye .gauge-percent-text, #mtls3ttrllr7e20gmye .gauge-text-labels-wrapper text, #mtls3ttrllr7e20gmye .donut-outside-label {
      fill: #001d54
    }
    #mtls3ttrllr7e20gmye .leaflet-bar a:hover { background: #e6e6e6 }
    #mtls3ttrllr7e20gmye .line-area-bucket-indicator rect { fill: rgba(0, 29, 84, 0.1) }
    #mtls3ttrllr7e20gmye .scatter-drill-highlighter { background: rgba(0, 29, 84, 0.1) }
    #mtls3ttrllr7e20gmye .line-area-crosshair { stroke: #001d54 }
    #mtls3ttrllr7e20gmye .pin-emitter-indicator line { stroke:#001d54; }
    #mtls3ttrllr7e20gmye .pin-emitter-indicator path.outer { fill:#001d54; }
    #mtls3ttrllr7e20gmye .pin-emitter-indicator path.inner { fill:#fff; }

    #mtls3ttrllr7e20gmye .hbar-bucketer-cell,#mtls3ttrllr7e20gmye .hbar-bucketer-cell-child,#mtls3ttrllr7e20gmye .hbar-bars-cell .plot-entity span,#mtls3ttrllr7e20gmye .selection-chart-block-label,#mtls3ttrllr7e20gmye .selection-chart-block .pega-radio-item,#mtls3ttrllr7e20gmye .selection-chart-block .circular-checkbox {
      color: #001d54
    }
    #mtls3ttrllr7e20gmye .selection-chart-block .circular-checkbox.checked .circle,
    #mtls3ttrllr7e20gmye .selection-chart-selector:after {
      background: #001d54
    }
    #mtls3ttrllr7e20gmye .selection-chart-block .circular-checkbox .circle i {
      color: #fff
    }
    #mtls3ttrllr7e20gmye .selection-chart-selector, #mtls3ttrllr7e20gmye .selection-chart-selector .chip {
      border-color: rgba(0, 29, 84, 0.2)
    }
    #mtls3ttrllr7e20gmye .hbar-feedback-message, #mtls3ttrllr7e20gmye .x-axis-page-button {
      color: #001d54
    }
    #mtls3ttrllr7e20gmye .bar-value-label { fill: #001d54 }
    #mtls3ttrllr7e20gmye .line-value-label.shadow {
      fill: #fff;
      stroke: #fff;
    }
    #mtls3ttrllr7e20gmye .hbar-table-row.hand-cursor:hover,
    #mtls3ttrllr7e20gmye .hbar-table-row.hand-cursor:focus,
    #mtls3ttrllr7e20gmye .hbar-table-row.hand-cursor:focus-within {
      box-shadow: 0 0 1px rgba(0, 29, 84, 0.5) inset, 5px 0 0 rgba(0, 29, 84, 0.5);
    }
    #mtls3ttrllr7e20gmye .hbar-table-row.hand-cursor:hover .hbar-bucketer-cell,
    #mtls3ttrllr7e20gmye .hbar-table-row.hand-cursor:focus .hbar-bucketer-cell,
    #mtls3ttrllr7e20gmye .hbar-table-row.hand-cursor:focus-within .hbar-bucketer-cell {
      background: rgba(0, 29, 84, 0.5);
      color: #fff;
    }
    #mtls3ttrllr7e20gmye .hbar-table-row.emitter {
      box-shadow: 0 0 1px rgba(0, 29, 84, 0.8) inset, 5px 0 0 rgba(0, 29, 84, 0.8) !important;
    }
    #mtls3ttrllr7e20gmye .hbar-table-row.emitter .hbar-bucketer-cell {
      background: rgba(0, 29, 84, 0.8) !important;
      color: #fff !important;
    }
    #mtls3ttrllr7e20gmye .hbar-table-row .plot-entity.emitter {
      outline: 1px solid #001d54;
      box-shadow: 0 0 3px #001d54 inset;
    }
  #mtls3ttrllr7e20gmye .tile-footer-label {
      color: #001d54;
      font-size: 13px;
      height: 26px;
      line-height: 26px;
      font-weight: bold;
      font-style: normal;
      text-align: center;
    }
        #mtls3ttrllr7e20gmye g.axis.bottom g.tick text,
        #mtls3ttrllr7e20gmye g.axis.bottom text.minima-ticks,
        #mtls3ttrllr7e20gmye g.axis.bottom text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3ttrllr7e20gmye g.axis.bottom g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3ttrllr7e20gmye .axis-label.y-axis {
        color: #001d54;
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3ttrllr7e20gmye g.y.axis.left g.tick text,
        #mtls3ttrllr7e20gmye g.y.axis.left text.minima-ticks,
        #mtls3ttrllr7e20gmye g.y.axis.left text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3ttrllr7e20gmye g.y.axis.left g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3ttrllr7e20gmye .axis-label.y-axis-right {
        color: #001d54;
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3ttrllr7e20gmye g.y.axis.right g.tick text,
        #mtls3ttrllr7e20gmye g.y.axis.right text.minima-ticks,
        #mtls3ttrllr7e20gmye g.y.axis.right text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3ttrllr7e20gmye g.y.axis.right g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3ttrllr7e20gmye .axis-label.h-axis {
        color: #001d54;
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3ttrllr7e20gmye g.y.axis.top g.tick text,
        #mtls3ttrllr7e20gmye g.y.axis.top text.minima-ticks,
        #mtls3ttrllr7e20gmye g.y.axis.top text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3ttrllr7e20gmye g.y.axis.top g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3ttrllr7e20gmye .hbars-bucketer-label {
      color: #001d54;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      font-style: normal;
      text-align: center;
    }
    #mtls3ttrllr7e20gmye .chart-data-label,
    #mtls3ttrllr7e20gmye .bar-value-label,
    #mtls3ttrllr7e20gmye .line-value-label {
      font-size: 11px;
      font-weight: normal;
      font-style: normal;
    }
  #mtls3ttrllr7e20gmye table.tile-table td,#mtls3ttrllr7e20gmye table.tile-table th,#mtls3ttrllr7e20gmye table.pivot-table tr.auxiliary-row,#mtls3ttrllr7e20gmye .db-tile.auxiliary-tile {
    border-color: #cfcfcf;
  }
    #mtls3ttrllr7e20gmye .tile-table-wrapper tr td{
        border-bottom: 0.0625rem solid #CFCFCF;
        border-inline-end: 0.0625rem solid #CFCFCF;
    }
    #mtls3ttrllr7e20gmye table.tile-table div.stretcher{
        padding: 0 calc(2 * 0.5rem);
    }
    #mtls3ttrllr7e20gmye table.tile-table th,
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab td.row-label {
      background: #f3f4fa;
      color: #001d54;
      font-size: 14px;
      line-height: 36px;
      font-weight: bold;
      font-style: normal;
    }
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab th.hand-cursor:hover,
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab td.row-label.hand-cursor:hover {
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset;
      outline: 1px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab th.emitter,
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab td.row-label.emitter {
      box-shadow: 5px 0 0 #001d54 inset !important;
      outline: 1px solid #001d54 !important;
    }
    #mtls3ttrllr7e20gmye table.tile-table td {
      color: #001d54;
      font-size: 14px;
      line-height: 36px;
      font-weight: normal;
      font-style: normal;
    }
    #mtls3ttrllr7e20gmye .table-cell-bar-parent {
      line-height: 32px
    }
    #mtls3ttrllr7e20gmye .table-cell-bar {
      line-height: 32px;
      height: 32px;
    }
    #mtls3ttrllr7e20gmye .table-cell-bar span {
      font-size: 14px;
    }
    #mtls3ttrllr7e20gmye table.tile-table .chip-text {
      font-size: 14px;
      line-height: 36px;
    }
    #mtls3ttrllr7e20gmye table.tile-table:not(.rank-table) tr.hand-cursor:hover,
    #mtls3ttrllr7e20gmye table.tile-table.rank-table tr.hand-cursor td.bucketer-cell:hover {
      outline: 1px solid rgba(0, 29, 84, 0.5);
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset, -2px 0 0 rgba(0, 29, 84, 0.5) inset;
    }
    #mtls3ttrllr7e20gmye table.tile-table:not(.rank-table) tr.emitter,
    #mtls3ttrllr7e20gmye table.tile-table.rank-table tr.emitter td.bucketer-cell {
      outline: 1px solid #001d54 !important;
      box-shadow: 5px 0 0 #001d54 inset, -2px 0 0 #001d54 inset !important;
    }
    #mtls3ttrllr7e20gmye table.tile-table .non-chip-text.hand-cursor:hover {
      outline: 1px solid rgba(0, 29, 84, 0.5);
      border-left: 4px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3ttrllr7e20gmye table.tile-table .non-chip-text.emitter {
      outline: 1px solid #001d54!important;
      border-left: 4px solid #001d54!important;
    }
    #mtls3ttrllr7e20gmye table.tile-table .chip-text.hand-cursor:hover {
      border-color: rgba(0, 29, 84, 0.5);
    }
    #mtls3ttrllr7e20gmye table.tile-table .chip-text.emitter {
      border-color: #001d54 !important;
    }
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab td.data-cell.hand-cursor:hover {
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset;
      outline: 1px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab td.data-cell.emitter {
      box-shadow: 5px 0 0 #001d54 inset !important;
      outline: 1px solid #001d54 !important;
    }
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab th.summary,
    #mtls3ttrllr7e20gmye .tile-table-container td.row-label.summary {
      background: #f3f4fa;
    }
    #mtls3ttrllr7e20gmye .tile-table-container.cross-tab td.data-cell.summary {
      background: #cfcfcf;
    }
    #mtls3ttrllr7e20gmye .tile-table.normal-table tr.data-row:nth-child(2n),#mtls3ttrllr7e20gmye .tile-table.pivot-table tr.data-row.can-drill-further:nth-child(4n+3),#mtls3ttrllr7e20gmye .tile-table.pivot-table tr.data-row:not(.can-drill-further):nth-child(2n) {
      background-color: #fff;
    }</style></div></div></div></div></article></div></div></div></div></div></div><span class="react-resizable-handle react-resizable-handle-se"></span></div><div class="sc-iBYQkv cPDQqc sc-bJYTlW react-grid-item cssTransforms react-resizable-hide react-resizable" dir="ltr" style="width: 386px; height: 272px; position: absolute; transform: translate(418px, 0px);"><div class="sc-fIzWTo frhfnN"><div class="sc-iBYQkv damcRU sc-bIquoJ hMuNxF"><div class="sc-iBYQkv kkmFIc sc-gfbwvm bfUDML"><div class="sc-iBYQkv hmDJhr sc-eGXPLf gcAxKq"><div data-testid="tile-wrapper" class="sc-QCRGo KJqYW"><div class="sc-iBYQkv iyCdVr sc-iVyiaF fdtBOW"><article role="none" class="sc-cUEOzv gjjtlN sc-iBYQkv grkAzG sc-eGXPLf gcAxKq"><header class="sc-dEVLtI hnTZlE sc-iBYQkv giUYVI"><div class="sc-iBYQkv gtrcRv"><div class="sc-iBYQkv eTeWvV"><div class="sc-iBYQkv gHZyaE"><div class="sc-iBYQkv hYSJbi"><h2 title="Breakdown of Approval Outcomes" class="sc-ksBlkl cOSRdK sc-buoZyn dYMUif">Breakdown of Approval Outcomes</h2></div></div></div></div><div><button data-testid=":menu-button:" id="_d6qqoymxa" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Actions - Breakdown of Approval Outcomes" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></header><div class="sc-csDkEv hXpxru sc-iBYQkv grkAzG sc-eGXPLf gcAxKq"><div data-testid="tileContent" class="sc-iBYQkv gChdkV sc-inRRxd kUJQZr"><div class="sc-iBYQkv gGrbdV sc-iBddIK iaMtZc"><div id="mtls3u22f1l2gq2kl6" class="sc-iBYQkv ldZbRa sc-hJEbIy kJcggF"><div class="sc-iBYQkv ldZbRa sc-cbsmVS exwhFO"><div class="sc-iBYQkv fvIpyo sc-cvNrnN goJNml chart-insight-tile" data-testid="legacyChartContent" dir="ltr"><div aria-label="Pie chart showing (Count) Final approval decision by Final approval decision. Chart has no orientation. In order to navigate around the chart's plot points, press enter and use your arrow keys to navigate. Use home and end keys to navigate to the first and last data point. " role="application" tabindex="0" class="sc-iBYQkv gLhndj sc-gnUaVU bEietB" style="padding-bottom: 26px;"><div class="db-tile-tooltip force-hide"></div><div class="tile-root-element"><svg class="tile-root-svg" width="354" height="186" focusable="false" aria-hidden="true"><g class="tile-svg-root-group" transform="translate(177, 93)"><g class="tile-plot-area-group"><g class="query-mtls3u22f1l2gq2kl6 plot-_count-_final-approval-decision"><g transform="translate(0, 0)"><path d="M0,-64A64,64,0,0,1,45.264,45.246L0,0Z" class="plot-entity donut x-_approved hand-cursor color-4-fill color-4-stroke" data-testid="pie-chart-element" aria-label="Approved, Count Final approval decision: 6 (38%)" role="button" data-a11y-primary-index="0" tabindex="-1" transform="translate(0,0)"></path></g><g><path d="M45.264,45.246A64,64,0,0,1,24.485,59.131L0,0Z" class="plot-entity donut x-_rejected hand-cursor color-5-fill color-5-stroke" data-testid="pie-chart-element" aria-label="Rejected, Count Final approval decision: 1 (6%)" role="button" data-a11y-primary-index="1" tabindex="-1" transform="translate(0,0)"></path></g><g><path d="M24.485,59.131A64,64,0,0,1,-24.474,59.135L0,0Z" class="plot-entity donut x-_rework hand-cursor color-6-fill color-6-stroke" data-testid="pie-chart-element" aria-label="Rework, Count Final approval decision: 2 (13%)" role="button" data-a11y-primary-index="2" tabindex="-1" transform="translate(0,0)"></path></g><g transform="translate(0, 0)"><path d="M-24.474,59.135A64,64,0,0,1,-0.012,-64L0,0Z" class="plot-entity donut x-_n__002f_a hand-cursor color-7-fill color-7-stroke" data-testid="pie-chart-element" aria-label="N/A, Count Final approval decision: 7 (44%)" role="button" data-a11y-primary-index="3" tabindex="-1" transform="translate(0,0)"></path></g></g></g></g></svg></div><div class="tile-footer-label" title="Final approval decision">Final approval decision</div></div><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="sc-jyHmMH eyZPuI"><defs><filter id="mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"></feGaussianBlur><feOffset in="blur" dx="0" dy="0" result="offsetBlur"></feOffset><feMerge><feMergeNode in="offsetBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs></svg></div></div><style>
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-0-fill {
      fill: #fff
    }
    #mtls3u22f1l2gq2kl6 .color-0-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-0-fill.emitter:not(.stroke-highlighting) {
      fill: #e6e6e6
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-0-stroke {
      stroke: #fff
    }
    #mtls3u22f1l2gq2kl6 .color-0-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-0-stroke.emitter {
      stroke: #e6e6e6
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-0-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-0-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-0-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-0-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-0-color {
      color: #fff;
    }
    #mtls3u22f1l2gq2kl6 .color-0-background {
      background-color: #fff;
    }
    #mtls3u22f1l2gq2kl6 .color-0-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-0-background.emitter {
      background-color: #e6e6e6;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-1-fill {
      fill: #ffffff
    }
    #mtls3u22f1l2gq2kl6 .color-1-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-1-fill.emitter:not(.stroke-highlighting) {
      fill: #e6e6e6
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-1-stroke {
      stroke: #ffffff
    }
    #mtls3u22f1l2gq2kl6 .color-1-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-1-stroke.emitter {
      stroke: #e6e6e6
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-1-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-1-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-1-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-1-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-1-color {
      color: #ffffff;
    }
    #mtls3u22f1l2gq2kl6 .color-1-background {
      background-color: #ffffff;
    }
    #mtls3u22f1l2gq2kl6 .color-1-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-1-background.emitter {
      background-color: #e6e6e6;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-2-fill {
      fill: #000
    }
    #mtls3u22f1l2gq2kl6 .color-2-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-2-fill.emitter:not(.stroke-highlighting) {
      fill: #333
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-2-stroke {
      stroke: #000
    }
    #mtls3u22f1l2gq2kl6 .color-2-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-2-stroke.emitter {
      stroke: #333
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-2-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-2-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-2-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-2-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-2-color {
      color: #000;
    }
    #mtls3u22f1l2gq2kl6 .color-2-background {
      background-color: #000;
    }
    #mtls3u22f1l2gq2kl6 .color-2-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-2-background.emitter {
      background-color: #333;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-3-fill {
      fill: #000000
    }
    #mtls3u22f1l2gq2kl6 .color-3-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-3-fill.emitter:not(.stroke-highlighting) {
      fill: #333
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-3-stroke {
      stroke: #000000
    }
    #mtls3u22f1l2gq2kl6 .color-3-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-3-stroke.emitter {
      stroke: #333
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-3-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-3-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-3-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-3-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-3-color {
      color: #000000;
    }
    #mtls3u22f1l2gq2kl6 .color-3-background {
      background-color: #000000;
    }
    #mtls3u22f1l2gq2kl6 .color-3-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-3-background.emitter {
      background-color: #333;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-4-fill {
      fill: #005fa8
    }
    #mtls3u22f1l2gq2kl6 .color-4-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-4-fill.emitter:not(.stroke-highlighting) {
      fill: #004275
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-4-stroke {
      stroke: #005fa8
    }
    #mtls3u22f1l2gq2kl6 .color-4-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-4-stroke.emitter {
      stroke: #004275
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-4-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-4-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-4-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-4-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-4-color {
      color: #005fa8;
    }
    #mtls3u22f1l2gq2kl6 .color-4-background {
      background-color: #005fa8;
    }
    #mtls3u22f1l2gq2kl6 .color-4-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-4-background.emitter {
      background-color: #004275;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-5-fill {
      fill: #00a89a
    }
    #mtls3u22f1l2gq2kl6 .color-5-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-5-fill.emitter:not(.stroke-highlighting) {
      fill: #00756b
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-5-stroke {
      stroke: #00a89a
    }
    #mtls3u22f1l2gq2kl6 .color-5-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-5-stroke.emitter {
      stroke: #00756b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-5-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-5-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-5-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-5-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-5-color {
      color: #00a89a;
    }
    #mtls3u22f1l2gq2kl6 .color-5-background {
      background-color: #00a89a;
    }
    #mtls3u22f1l2gq2kl6 .color-5-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-5-background.emitter {
      background-color: #00756b;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-6-fill {
      fill: #ffb647
    }
    #mtls3u22f1l2gq2kl6 .color-6-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-6-fill.emitter:not(.stroke-highlighting) {
      fill: #ffa214
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-6-stroke {
      stroke: #ffb647
    }
    #mtls3u22f1l2gq2kl6 .color-6-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-6-stroke.emitter {
      stroke: #ffa214
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-6-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-6-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-6-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-6-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-6-color {
      color: #ffb647;
    }
    #mtls3u22f1l2gq2kl6 .color-6-background {
      background-color: #ffb647;
    }
    #mtls3u22f1l2gq2kl6 .color-6-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-6-background.emitter {
      background-color: #ffa214;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-7-fill {
      fill: #27823d
    }
    #mtls3u22f1l2gq2kl6 .color-7-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-7-fill.emitter:not(.stroke-highlighting) {
      fill: #1b5b2b
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-7-stroke {
      stroke: #27823d
    }
    #mtls3u22f1l2gq2kl6 .color-7-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-7-stroke.emitter {
      stroke: #1b5b2b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-7-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-7-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-7-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-7-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-7-color {
      color: #27823d;
    }
    #mtls3u22f1l2gq2kl6 .color-7-background {
      background-color: #27823d;
    }
    #mtls3u22f1l2gq2kl6 .color-7-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-7-background.emitter {
      background-color: #1b5b2b;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-8-fill {
      fill: #ff873d
    }
    #mtls3u22f1l2gq2kl6 .color-8-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-8-fill.emitter:not(.stroke-highlighting) {
      fill: #ff670a
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-8-stroke {
      stroke: #ff873d
    }
    #mtls3u22f1l2gq2kl6 .color-8-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-8-stroke.emitter {
      stroke: #ff670a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-8-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-8-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-8-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-8-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-8-color {
      color: #ff873d;
    }
    #mtls3u22f1l2gq2kl6 .color-8-background {
      background-color: #ff873d;
    }
    #mtls3u22f1l2gq2kl6 .color-8-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-8-background.emitter {
      background-color: #ff670a;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-9-fill {
      fill: #da4644
    }
    #mtls3u22f1l2gq2kl6 .color-9-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-9-fill.emitter:not(.stroke-highlighting) {
      fill: #c42927
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-9-stroke {
      stroke: #da4644
    }
    #mtls3u22f1l2gq2kl6 .color-9-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-9-stroke.emitter {
      stroke: #c42927
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-9-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-9-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-9-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-9-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-9-color {
      color: #da4644;
    }
    #mtls3u22f1l2gq2kl6 .color-9-background {
      background-color: #da4644;
    }
    #mtls3u22f1l2gq2kl6 .color-9-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-9-background.emitter {
      background-color: #c42927;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-10-fill {
      fill: #7d5fbf
    }
    #mtls3u22f1l2gq2kl6 .color-10-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-10-fill.emitter:not(.stroke-highlighting) {
      fill: #6343a8
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-10-stroke {
      stroke: #7d5fbf
    }
    #mtls3u22f1l2gq2kl6 .color-10-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-10-stroke.emitter {
      stroke: #6343a8
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-10-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-10-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-10-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-10-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-10-color {
      color: #7d5fbf;
    }
    #mtls3u22f1l2gq2kl6 .color-10-background {
      background-color: #7d5fbf;
    }
    #mtls3u22f1l2gq2kl6 .color-10-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-10-background.emitter {
      background-color: #6343a8;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-11-fill {
      fill: #ff8080
    }
    #mtls3u22f1l2gq2kl6 .color-11-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-11-fill.emitter:not(.stroke-highlighting) {
      fill: #ff4d4d
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-11-stroke {
      stroke: #ff8080
    }
    #mtls3u22f1l2gq2kl6 .color-11-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-11-stroke.emitter {
      stroke: #ff4d4d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-11-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-11-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-11-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-11-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-11-color {
      color: #ff8080;
    }
    #mtls3u22f1l2gq2kl6 .color-11-background {
      background-color: #ff8080;
    }
    #mtls3u22f1l2gq2kl6 .color-11-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-11-background.emitter {
      background-color: #ff4d4d;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-12-fill {
      fill: #8e5025
    }
    #mtls3u22f1l2gq2kl6 .color-12-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-12-fill.emitter:not(.stroke-highlighting) {
      fill: #66391a
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-12-stroke {
      stroke: #8e5025
    }
    #mtls3u22f1l2gq2kl6 .color-12-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-12-stroke.emitter {
      stroke: #66391a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-12-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-12-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-12-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-12-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-12-color {
      color: #8e5025;
    }
    #mtls3u22f1l2gq2kl6 .color-12-background {
      background-color: #8e5025;
    }
    #mtls3u22f1l2gq2kl6 .color-12-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-12-background.emitter {
      background-color: #66391a;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-13-fill {
      fill: #b0a19c
    }
    #mtls3u22f1l2gq2kl6 .color-13-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-13-fill.emitter:not(.stroke-highlighting) {
      fill: #998680
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-13-stroke {
      stroke: #b0a19c
    }
    #mtls3u22f1l2gq2kl6 .color-13-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-13-stroke.emitter {
      stroke: #998680
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-13-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-13-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-13-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-13-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-13-color {
      color: #b0a19c;
    }
    #mtls3u22f1l2gq2kl6 .color-13-background {
      background-color: #b0a19c;
    }
    #mtls3u22f1l2gq2kl6 .color-13-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-13-background.emitter {
      background-color: #998680;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-14-fill {
      fill: #75a1cc
    }
    #mtls3u22f1l2gq2kl6 .color-14-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-14-fill.emitter:not(.stroke-highlighting) {
      fill: #5088be
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-14-stroke {
      stroke: #75a1cc
    }
    #mtls3u22f1l2gq2kl6 .color-14-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-14-stroke.emitter {
      stroke: #5088be
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-14-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-14-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-14-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-14-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-14-color {
      color: #75a1cc;
    }
    #mtls3u22f1l2gq2kl6 .color-14-background {
      background-color: #75a1cc;
    }
    #mtls3u22f1l2gq2kl6 .color-14-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-14-background.emitter {
      background-color: #5088be;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-15-fill {
      fill: #80cbc5
    }
    #mtls3u22f1l2gq2kl6 .color-15-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-15-fill.emitter:not(.stroke-highlighting) {
      fill: #5cbcb4
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-15-stroke {
      stroke: #80cbc5
    }
    #mtls3u22f1l2gq2kl6 .color-15-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-15-stroke.emitter {
      stroke: #5cbcb4
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-15-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-15-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-15-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-15-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-15-color {
      color: #80cbc5;
    }
    #mtls3u22f1l2gq2kl6 .color-15-background {
      background-color: #80cbc5;
    }
    #mtls3u22f1l2gq2kl6 .color-15-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-15-background.emitter {
      background-color: #5cbcb4;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-16-fill {
      fill: #ffd494
    }
    #mtls3u22f1l2gq2kl6 .color-16-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-16-fill.emitter:not(.stroke-highlighting) {
      fill: #ffc061
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-16-stroke {
      stroke: #ffd494
    }
    #mtls3u22f1l2gq2kl6 .color-16-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-16-stroke.emitter {
      stroke: #ffc061
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-16-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-16-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-16-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-16-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-16-color {
      color: #ffd494;
    }
    #mtls3u22f1l2gq2kl6 .color-16-background {
      background-color: #ffd494;
    }
    #mtls3u22f1l2gq2kl6 .color-16-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-16-background.emitter {
      background-color: #ffc061;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-17-fill {
      fill: #84b390
    }
    #mtls3u22f1l2gq2kl6 .color-17-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-17-fill.emitter:not(.stroke-highlighting) {
      fill: #64a074
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-17-stroke {
      stroke: #84b390
    }
    #mtls3u22f1l2gq2kl6 .color-17-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-17-stroke.emitter {
      stroke: #64a074
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-17-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-17-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-17-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-17-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-17-color {
      color: #84b390;
    }
    #mtls3u22f1l2gq2kl6 .color-17-background {
      background-color: #84b390;
    }
    #mtls3u22f1l2gq2kl6 .color-17-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-17-background.emitter {
      background-color: #64a074;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-18-fill {
      fill: #ffba8f
    }
    #mtls3u22f1l2gq2kl6 .color-18-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-18-fill.emitter:not(.stroke-highlighting) {
      fill: #ff9b5c
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-18-stroke {
      stroke: #ffba8f
    }
    #mtls3u22f1l2gq2kl6 .color-18-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-18-stroke.emitter {
      stroke: #ff9b5c
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-18-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-18-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-18-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-18-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-18-color {
      color: #ffba8f;
    }
    #mtls3u22f1l2gq2kl6 .color-18-background {
      background-color: #ffba8f;
    }
    #mtls3u22f1l2gq2kl6 .color-18-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-18-background.emitter {
      background-color: #ff9b5c;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-19-fill {
      fill: #ed9391
    }
    #mtls3u22f1l2gq2kl6 .color-19-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-19-fill.emitter:not(.stroke-highlighting) {
      fill: #e66865
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-19-stroke {
      stroke: #ed9391
    }
    #mtls3u22f1l2gq2kl6 .color-19-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-19-stroke.emitter {
      stroke: #e66865
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-19-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-19-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-19-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-19-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-19-color {
      color: #ed9391;
    }
    #mtls3u22f1l2gq2kl6 .color-19-background {
      background-color: #ed9391;
    }
    #mtls3u22f1l2gq2kl6 .color-19-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-19-background.emitter {
      background-color: #e66865;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-20-fill {
      fill: #beaee0
    }
    #mtls3u22f1l2gq2kl6 .color-20-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-20-fill.emitter:not(.stroke-highlighting) {
      fill: #a089d2
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-20-stroke {
      stroke: #beaee0
    }
    #mtls3u22f1l2gq2kl6 .color-20-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-20-stroke.emitter {
      stroke: #a089d2
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-20-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-20-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-20-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-20-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-20-color {
      color: #beaee0;
    }
    #mtls3u22f1l2gq2kl6 .color-20-background {
      background-color: #beaee0;
    }
    #mtls3u22f1l2gq2kl6 .color-20-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-20-background.emitter {
      background-color: #a089d2;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-21-fill {
      fill: #ffb3b3
    }
    #mtls3u22f1l2gq2kl6 .color-21-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-21-fill.emitter:not(.stroke-highlighting) {
      fill: #ff8080
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-21-stroke {
      stroke: #ffb3b3
    }
    #mtls3u22f1l2gq2kl6 .color-21-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-21-stroke.emitter {
      stroke: #ff8080
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-21-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-21-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-21-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-21-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-21-color {
      color: #ffb3b3;
    }
    #mtls3u22f1l2gq2kl6 .color-21-background {
      background-color: #ffb3b3;
    }
    #mtls3u22f1l2gq2kl6 .color-21-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-21-background.emitter {
      background-color: #ff8080;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-22-fill {
      fill: #bd997f
    }
    #mtls3u22f1l2gq2kl6 .color-22-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-22-fill.emitter:not(.stroke-highlighting) {
      fill: #ac7e5d
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-22-stroke {
      stroke: #bd997f
    }
    #mtls3u22f1l2gq2kl6 .color-22-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-22-stroke.emitter {
      stroke: #ac7e5d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-22-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-22-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-22-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-22-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-22-color {
      color: #bd997f;
    }
    #mtls3u22f1l2gq2kl6 .color-22-background {
      background-color: #bd997f;
    }
    #mtls3u22f1l2gq2kl6 .color-22-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-22-background.emitter {
      background-color: #ac7e5d;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-23-fill {
      fill: #cec7c5
    }
    #mtls3u22f1l2gq2kl6 .color-23-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-23-fill.emitter:not(.stroke-highlighting) {
      fill: #b7aca9
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-23-stroke {
      stroke: #cec7c5
    }
    #mtls3u22f1l2gq2kl6 .color-23-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-23-stroke.emitter {
      stroke: #b7aca9
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-23-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-23-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-23-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-23-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-23-color {
      color: #cec7c5;
    }
    #mtls3u22f1l2gq2kl6 .color-23-background {
      background-color: #cec7c5;
    }
    #mtls3u22f1l2gq2kl6 .color-23-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-23-background.emitter {
      background-color: #b7aca9;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-24-fill {
      fill: #db4642
    }
    #mtls3u22f1l2gq2kl6 .color-24-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-24-fill.emitter:not(.stroke-highlighting) {
      fill: #c52a25
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-24-stroke {
      stroke: #db4642
    }
    #mtls3u22f1l2gq2kl6 .color-24-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-24-stroke.emitter {
      stroke: #c52a25
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-24-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-24-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-24-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-24-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-24-color {
      color: #db4642;
    }
    #mtls3u22f1l2gq2kl6 .color-24-background {
      background-color: #db4642;
    }
    #mtls3u22f1l2gq2kl6 .color-24-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-24-background.emitter {
      background-color: #c52a25;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-25-fill {
      fill: #ff863d
    }
    #mtls3u22f1l2gq2kl6 .color-25-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-25-fill.emitter:not(.stroke-highlighting) {
      fill: #ff660a
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-25-stroke {
      stroke: #ff863d
    }
    #mtls3u22f1l2gq2kl6 .color-25-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-25-stroke.emitter {
      stroke: #ff660a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-25-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-25-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-25-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-25-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-25-color {
      color: #ff863d;
    }
    #mtls3u22f1l2gq2kl6 .color-25-background {
      background-color: #ff863d;
    }
    #mtls3u22f1l2gq2kl6 .color-25-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-25-background.emitter {
      background-color: #ff660a;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-26-fill {
      fill: #ffb646
    }
    #mtls3u22f1l2gq2kl6 .color-26-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-26-fill.emitter:not(.stroke-highlighting) {
      fill: #ffa213
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-26-stroke {
      stroke: #ffb646
    }
    #mtls3u22f1l2gq2kl6 .color-26-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-26-stroke.emitter {
      stroke: #ffa213
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-26-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-26-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-26-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-26-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-26-color {
      color: #ffb646;
    }
    #mtls3u22f1l2gq2kl6 .color-26-background {
      background-color: #ffb646;
    }
    #mtls3u22f1l2gq2kl6 .color-26-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-26-background.emitter {
      background-color: #ffa213;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-27-fill {
      fill: #fde980
    }
    #mtls3u22f1l2gq2kl6 .color-27-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-27-fill.emitter:not(.stroke-highlighting) {
      fill: #fce04e
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-27-stroke {
      stroke: #fde980
    }
    #mtls3u22f1l2gq2kl6 .color-27-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-27-stroke.emitter {
      stroke: #fce04e
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-27-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-27-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-27-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-27-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-27-color {
      color: #fde980;
    }
    #mtls3u22f1l2gq2kl6 .color-27-background {
      background-color: #fde980;
    }
    #mtls3u22f1l2gq2kl6 .color-27-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-27-background.emitter {
      background-color: #fce04e;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-28-fill {
      fill: #66cc66
    }
    #mtls3u22f1l2gq2kl6 .color-28-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-28-fill.emitter:not(.stroke-highlighting) {
      fill: #40bf40
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-28-stroke {
      stroke: #66cc66
    }
    #mtls3u22f1l2gq2kl6 .color-28-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-28-stroke.emitter {
      stroke: #40bf40
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-28-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-28-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-28-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-28-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-28-color {
      color: #66cc66;
    }
    #mtls3u22f1l2gq2kl6 .color-28-background {
      background-color: #66cc66;
    }
    #mtls3u22f1l2gq2kl6 .color-28-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-28-background.emitter {
      background-color: #40bf40;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-29-fill {
      fill: #7f92a1
    }
    #mtls3u22f1l2gq2kl6 .color-29-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-29-fill.emitter:not(.stroke-highlighting) {
      fill: #647989
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-29-stroke {
      stroke: #7f92a1
    }
    #mtls3u22f1l2gq2kl6 .color-29-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-29-stroke.emitter {
      stroke: #647989
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-29-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-29-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-29-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-29-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-29-color {
      color: #7f92a1;
    }
    #mtls3u22f1l2gq2kl6 .color-29-background {
      background-color: #7f92a1;
    }
    #mtls3u22f1l2gq2kl6 .color-29-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-29-background.emitter {
      background-color: #647989;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-30-fill {
      fill: #1c1c1c
    }
    #mtls3u22f1l2gq2kl6 .color-30-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-30-fill.emitter:not(.stroke-highlighting) {
      fill: #4f4f4f
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-30-stroke {
      stroke: #1c1c1c
    }
    #mtls3u22f1l2gq2kl6 .color-30-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-30-stroke.emitter {
      stroke: #4f4f4f
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-30-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-30-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-30-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-30-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-30-color {
      color: #1c1c1c;
    }
    #mtls3u22f1l2gq2kl6 .color-30-background {
      background-color: #1c1c1c;
    }
    #mtls3u22f1l2gq2kl6 .color-30-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-30-background.emitter {
      background-color: #4f4f4f;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-31-fill {
      fill: #004d94
    }
    #mtls3u22f1l2gq2kl6 .color-31-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-31-fill.emitter:not(.stroke-highlighting) {
      fill: #0082fa
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-31-stroke {
      stroke: #004d94
    }
    #mtls3u22f1l2gq2kl6 .color-31-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-31-stroke.emitter {
      stroke: #0082fa
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-31-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-31-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-31-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-31-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-31-color {
      color: #004d94;
    }
    #mtls3u22f1l2gq2kl6 .color-31-background {
      background-color: #004d94;
    }
    #mtls3u22f1l2gq2kl6 .color-31-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-31-background.emitter {
      background-color: #0082fa;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-32-fill {
      fill: #009487
    }
    #mtls3u22f1l2gq2kl6 .color-32-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-32-fill.emitter:not(.stroke-highlighting) {
      fill: #00fae4
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-32-stroke {
      stroke: #009487
    }
    #mtls3u22f1l2gq2kl6 .color-32-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-32-stroke.emitter {
      stroke: #00fae4
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-32-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-32-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-32-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-32-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-32-color {
      color: #009487;
    }
    #mtls3u22f1l2gq2kl6 .color-32-background {
      background-color: #009487;
    }
    #mtls3u22f1l2gq2kl6 .color-32-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-32-background.emitter {
      background-color: #00fae4;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-33-fill {
      fill: #feb13d
    }
    #mtls3u22f1l2gq2kl6 .color-33-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-33-fill.emitter:not(.stroke-highlighting) {
      fill: #fe9d0a
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-33-stroke {
      stroke: #feb13d
    }
    #mtls3u22f1l2gq2kl6 .color-33-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-33-stroke.emitter {
      stroke: #fe9d0a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-33-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-33-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-33-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-33-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-33-color {
      color: #feb13d;
    }
    #mtls3u22f1l2gq2kl6 .color-33-background {
      background-color: #feb13d;
    }
    #mtls3u22f1l2gq2kl6 .color-33-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-33-background.emitter {
      background-color: #fe9d0a;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-34-fill {
      fill: #1f7233
    }
    #mtls3u22f1l2gq2kl6 .color-34-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-34-fill.emitter:not(.stroke-highlighting) {
      fill: #35c257
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-34-stroke {
      stroke: #1f7233
    }
    #mtls3u22f1l2gq2kl6 .color-34-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-34-stroke.emitter {
      stroke: #35c257
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-34-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-34-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-34-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-34-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-34-color {
      color: #1f7233;
    }
    #mtls3u22f1l2gq2kl6 .color-34-background {
      background-color: #1f7233;
    }
    #mtls3u22f1l2gq2kl6 .color-34-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-34-background.emitter {
      background-color: #35c257;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-35-fill {
      fill: #ff741e
    }
    #mtls3u22f1l2gq2kl6 .color-35-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-35-fill.emitter:not(.stroke-highlighting) {
      fill: #ea5900
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-35-stroke {
      stroke: #ff741e
    }
    #mtls3u22f1l2gq2kl6 .color-35-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-35-stroke.emitter {
      stroke: #ea5900
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-35-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-35-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-35-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-35-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-35-color {
      color: #ff741e;
    }
    #mtls3u22f1l2gq2kl6 .color-35-background {
      background-color: #ff741e;
    }
    #mtls3u22f1l2gq2kl6 .color-35-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-35-background.emitter {
      background-color: #ea5900;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-36-fill {
      fill: #c72623
    }
    #mtls3u22f1l2gq2kl6 .color-36-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-36-fill.emitter:not(.stroke-highlighting) {
      fill: #9c1e1b
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-36-stroke {
      stroke: #c72623
    }
    #mtls3u22f1l2gq2kl6 .color-36-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-36-stroke.emitter {
      stroke: #9c1e1b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-36-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-36-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-36-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-36-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-36-color {
      color: #c72623;
    }
    #mtls3u22f1l2gq2kl6 .color-36-background {
      background-color: #c72623;
    }
    #mtls3u22f1l2gq2kl6 .color-36-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-36-background.emitter {
      background-color: #9c1e1b;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-37-fill {
      fill: #7151b4
    }
    #mtls3u22f1l2gq2kl6 .color-37-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-37-fill.emitter:not(.stroke-highlighting) {
      fill: #5a3f93
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-37-stroke {
      stroke: #7151b4
    }
    #mtls3u22f1l2gq2kl6 .color-37-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-37-stroke.emitter {
      stroke: #5a3f93
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-37-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-37-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-37-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-37-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-37-color {
      color: #7151b4;
    }
    #mtls3u22f1l2gq2kl6 .color-37-background {
      background-color: #7151b4;
    }
    #mtls3u22f1l2gq2kl6 .color-37-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-37-background.emitter {
      background-color: #5a3f93;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-38-fill {
      fill: #ff6e6e
    }
    #mtls3u22f1l2gq2kl6 .color-38-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-38-fill.emitter:not(.stroke-highlighting) {
      fill: #ff3b3b
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-38-stroke {
      stroke: #ff6e6e
    }
    #mtls3u22f1l2gq2kl6 .color-38-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-38-stroke.emitter {
      stroke: #ff3b3b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-38-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-38-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-38-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-38-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-38-color {
      color: #ff6e6e;
    }
    #mtls3u22f1l2gq2kl6 .color-38-background {
      background-color: #ff6e6e;
    }
    #mtls3u22f1l2gq2kl6 .color-38-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-38-background.emitter {
      background-color: #ff3b3b;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-39-fill {
      fill: #82481f
    }
    #mtls3u22f1l2gq2kl6 .color-39-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-39-fill.emitter:not(.stroke-highlighting) {
      fill: #593115
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-39-stroke {
      stroke: #82481f
    }
    #mtls3u22f1l2gq2kl6 .color-39-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-39-stroke.emitter {
      stroke: #593115
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-39-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-39-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-39-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-39-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-39-color {
      color: #82481f;
    }
    #mtls3u22f1l2gq2kl6 .color-39-background {
      background-color: #82481f;
    }
    #mtls3u22f1l2gq2kl6 .color-39-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-39-background.emitter {
      background-color: #593115;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-40-fill {
      fill: #a49590
    }
    #mtls3u22f1l2gq2kl6 .color-40-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-40-fill.emitter:not(.stroke-highlighting) {
      fill: #8d7a74
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-40-stroke {
      stroke: #a49590
    }
    #mtls3u22f1l2gq2kl6 .color-40-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-40-stroke.emitter {
      stroke: #8d7a74
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-40-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-40-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-40-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-40-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-40-color {
      color: #a49590;
    }
    #mtls3u22f1l2gq2kl6 .color-40-background {
      background-color: #a49590;
    }
    #mtls3u22f1l2gq2kl6 .color-40-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-40-background.emitter {
      background-color: #8d7a74;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-41-fill {
      fill: #1e578e
    }
    #mtls3u22f1l2gq2kl6 .color-41-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-41-fill.emitter:not(.stroke-highlighting) {
      fill: #153d64
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-41-stroke {
      stroke: #1e578e
    }
    #mtls3u22f1l2gq2kl6 .color-41-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-41-stroke.emitter {
      stroke: #153d64
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-41-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-41-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-41-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-41-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-41-color {
      color: #1e578e;
    }
    #mtls3u22f1l2gq2kl6 .color-41-background {
      background-color: #1e578e;
    }
    #mtls3u22f1l2gq2kl6 .color-41-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-41-background.emitter {
      background-color: #153d64;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-42-fill {
      fill: #0f776e
    }
    #mtls3u22f1l2gq2kl6 .color-42-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-42-fill.emitter:not(.stroke-highlighting) {
      fill: #1ad2c2
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-42-stroke {
      stroke: #0f776e
    }
    #mtls3u22f1l2gq2kl6 .color-42-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-42-stroke.emitter {
      stroke: #1ad2c2
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-42-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-42-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-42-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-42-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-42-color {
      color: #0f776e;
    }
    #mtls3u22f1l2gq2kl6 .color-42-background {
      background-color: #0f776e;
    }
    #mtls3u22f1l2gq2kl6 .color-42-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-42-background.emitter {
      background-color: #1ad2c2;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-43-fill {
      fill: #a94367
    }
    #mtls3u22f1l2gq2kl6 .color-43-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-43-fill.emitter:not(.stroke-highlighting) {
      fill: #843551
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-43-stroke {
      stroke: #a94367
    }
    #mtls3u22f1l2gq2kl6 .color-43-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-43-stroke.emitter {
      stroke: #843551
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-43-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-43-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-43-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-43-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-43-color {
      color: #a94367;
    }
    #mtls3u22f1l2gq2kl6 .color-43-background {
      background-color: #a94367;
    }
    #mtls3u22f1l2gq2kl6 .color-43-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-43-background.emitter {
      background-color: #843551;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-44-fill {
      fill: #6b498a
    }
    #mtls3u22f1l2gq2kl6 .color-44-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-44-fill.emitter:not(.stroke-highlighting) {
      fill: #513769
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-44-stroke {
      stroke: #6b498a
    }
    #mtls3u22f1l2gq2kl6 .color-44-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-44-stroke.emitter {
      stroke: #513769
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-44-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-44-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-44-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-44-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-44-color {
      color: #6b498a;
    }
    #mtls3u22f1l2gq2kl6 .color-44-background {
      background-color: #6b498a;
    }
    #mtls3u22f1l2gq2kl6 .color-44-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-44-background.emitter {
      background-color: #513769;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-45-fill {
      fill: #6e3e90
    }
    #mtls3u22f1l2gq2kl6 .color-45-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-45-fill.emitter:not(.stroke-highlighting) {
      fill: #532f6c
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-45-stroke {
      stroke: #6e3e90
    }
    #mtls3u22f1l2gq2kl6 .color-45-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-45-stroke.emitter {
      stroke: #532f6c
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-45-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-45-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-45-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-45-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-45-color {
      color: #6e3e90;
    }
    #mtls3u22f1l2gq2kl6 .color-45-background {
      background-color: #6e3e90;
    }
    #mtls3u22f1l2gq2kl6 .color-45-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-45-background.emitter {
      background-color: #532f6c;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-46-fill {
      fill: #e66342
    }
    #mtls3u22f1l2gq2kl6 .color-46-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-46-fill.emitter:not(.stroke-highlighting) {
      fill: #d8421d
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-46-stroke {
      stroke: #e66342
    }
    #mtls3u22f1l2gq2kl6 .color-46-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-46-stroke.emitter {
      stroke: #d8421d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-46-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-46-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-46-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-46-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-46-color {
      color: #e66342;
    }
    #mtls3u22f1l2gq2kl6 .color-46-background {
      background-color: #e66342;
    }
    #mtls3u22f1l2gq2kl6 .color-46-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-46-background.emitter {
      background-color: #d8421d;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-47-fill {
      fill: #cb3b59
    }
    #mtls3u22f1l2gq2kl6 .color-47-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-47-fill.emitter:not(.stroke-highlighting) {
      fill: #a72c46
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-47-stroke {
      stroke: #cb3b59
    }
    #mtls3u22f1l2gq2kl6 .color-47-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-47-stroke.emitter {
      stroke: #a72c46
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-47-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-47-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-47-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-47-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-47-color {
      color: #cb3b59;
    }
    #mtls3u22f1l2gq2kl6 .color-47-background {
      background-color: #cb3b59;
    }
    #mtls3u22f1l2gq2kl6 .color-47-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-47-background.emitter {
      background-color: #a72c46;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-48-fill {
      fill: #d53bb1
    }
    #mtls3u22f1l2gq2kl6 .color-48-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-48-fill.emitter:not(.stroke-highlighting) {
      fill: #b62795
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-48-stroke {
      stroke: #d53bb1
    }
    #mtls3u22f1l2gq2kl6 .color-48-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-48-stroke.emitter {
      stroke: #b62795
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-48-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-48-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-48-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-48-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-48-color {
      color: #d53bb1;
    }
    #mtls3u22f1l2gq2kl6 .color-48-background {
      background-color: #d53bb1;
    }
    #mtls3u22f1l2gq2kl6 .color-48-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-48-background.emitter {
      background-color: #b62795;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-49-fill {
      fill: #255c9c
    }
    #mtls3u22f1l2gq2kl6 .color-49-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-49-fill.emitter:not(.stroke-highlighting) {
      fill: #1b4473
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-49-stroke {
      stroke: #255c9c
    }
    #mtls3u22f1l2gq2kl6 .color-49-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-49-stroke.emitter {
      stroke: #1b4473
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-49-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-49-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-49-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-49-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-49-color {
      color: #255c9c;
    }
    #mtls3u22f1l2gq2kl6 .color-49-background {
      background-color: #255c9c;
    }
    #mtls3u22f1l2gq2kl6 .color-49-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-49-background.emitter {
      background-color: #1b4473;
    }
  
    /* FILL */
    #mtls3u22f1l2gq2kl6 .color-50-fill {
      fill: #73669d
    }
    #mtls3u22f1l2gq2kl6 .color-50-fill.highlighted:not(.stroke-highlighting),
    #mtls3u22f1l2gq2kl6 .color-50-fill.emitter:not(.stroke-highlighting) {
      fill: #5c517f
    }

    /* STROKE */
    #mtls3u22f1l2gq2kl6 .color-50-stroke {
      stroke: #73669d
    }
    #mtls3u22f1l2gq2kl6 .color-50-stroke.highlighted,
    #mtls3u22f1l2gq2kl6 .color-50-stroke.emitter {
      stroke: #5c517f
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u22f1l2gq2kl6 .color-50-stroke.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-50-stroke.stroke-highlighting.emitter,
    #mtls3u22f1l2gq2kl6 .color-50-fill.stroke-highlighting.highlighted,
    #mtls3u22f1l2gq2kl6 .color-50-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u22f1l2gq2kl6-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u22f1l2gq2kl6 .color-50-color {
      color: #73669d;
    }
    #mtls3u22f1l2gq2kl6 .color-50-background {
      background-color: #73669d;
    }
    #mtls3u22f1l2gq2kl6 .color-50-background.highlighted,
    #mtls3u22f1l2gq2kl6 .color-50-background.emitter {
      background-color: #5c517f;
    }
  </style><style>
    #mtls3u22f1l2gq2kl6.db-tile {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    #mtls3u22f1l2gq2kl6 .db-tile-body,#mtls3u22f1l2gq2kl6 .db-tile-animation-tick,#mtls3u22f1l2gq2kl6 .db-tile-visible-legend,#mtls3u22f1l2gq2kl6 .db-tile-tooltip,#mtls3u22f1l2gq2kl6 .tile-no-data-watermark,#mtls3u22f1l2gq2kl6 .leaflet-bar a {
      background: #fff;
      color: #001d54;
    }
    #mtls3u22f1l2gq2kl6 .db-tile-zoom-box,#mtls3u22f1l2gq2kl6 .db-tile-pinch-zoom-box,#mtls3u22f1l2gq2kl6 .selection-chart-block .pega-radio-item:before,#mtls3u22f1l2gq2kl6 .selection-chart-block .circular-checkbox .circle {
      border-color: #001d54 !important
    }
    #mtls3u22f1l2gq2kl6 .gauge-percent-text, #mtls3u22f1l2gq2kl6 .gauge-text-labels-wrapper text, #mtls3u22f1l2gq2kl6 .donut-outside-label {
      fill: #001d54
    }
    #mtls3u22f1l2gq2kl6 .leaflet-bar a:hover { background: #e6e6e6 }
    #mtls3u22f1l2gq2kl6 .line-area-bucket-indicator rect { fill: rgba(0, 29, 84, 0.1) }
    #mtls3u22f1l2gq2kl6 .scatter-drill-highlighter { background: rgba(0, 29, 84, 0.1) }
    #mtls3u22f1l2gq2kl6 .line-area-crosshair { stroke: #001d54 }
    #mtls3u22f1l2gq2kl6 .pin-emitter-indicator line { stroke:#001d54; }
    #mtls3u22f1l2gq2kl6 .pin-emitter-indicator path.outer { fill:#001d54; }
    #mtls3u22f1l2gq2kl6 .pin-emitter-indicator path.inner { fill:#fff; }

    #mtls3u22f1l2gq2kl6 .hbar-bucketer-cell,#mtls3u22f1l2gq2kl6 .hbar-bucketer-cell-child,#mtls3u22f1l2gq2kl6 .hbar-bars-cell .plot-entity span,#mtls3u22f1l2gq2kl6 .selection-chart-block-label,#mtls3u22f1l2gq2kl6 .selection-chart-block .pega-radio-item,#mtls3u22f1l2gq2kl6 .selection-chart-block .circular-checkbox {
      color: #001d54
    }
    #mtls3u22f1l2gq2kl6 .selection-chart-block .circular-checkbox.checked .circle,
    #mtls3u22f1l2gq2kl6 .selection-chart-selector:after {
      background: #001d54
    }
    #mtls3u22f1l2gq2kl6 .selection-chart-block .circular-checkbox .circle i {
      color: #fff
    }
    #mtls3u22f1l2gq2kl6 .selection-chart-selector, #mtls3u22f1l2gq2kl6 .selection-chart-selector .chip {
      border-color: rgba(0, 29, 84, 0.2)
    }
    #mtls3u22f1l2gq2kl6 .hbar-feedback-message, #mtls3u22f1l2gq2kl6 .x-axis-page-button {
      color: #001d54
    }
    #mtls3u22f1l2gq2kl6 .bar-value-label { fill: #001d54 }
    #mtls3u22f1l2gq2kl6 .line-value-label.shadow {
      fill: #fff;
      stroke: #fff;
    }
    #mtls3u22f1l2gq2kl6 .hbar-table-row.hand-cursor:hover,
    #mtls3u22f1l2gq2kl6 .hbar-table-row.hand-cursor:focus,
    #mtls3u22f1l2gq2kl6 .hbar-table-row.hand-cursor:focus-within {
      box-shadow: 0 0 1px rgba(0, 29, 84, 0.5) inset, 5px 0 0 rgba(0, 29, 84, 0.5);
    }
    #mtls3u22f1l2gq2kl6 .hbar-table-row.hand-cursor:hover .hbar-bucketer-cell,
    #mtls3u22f1l2gq2kl6 .hbar-table-row.hand-cursor:focus .hbar-bucketer-cell,
    #mtls3u22f1l2gq2kl6 .hbar-table-row.hand-cursor:focus-within .hbar-bucketer-cell {
      background: rgba(0, 29, 84, 0.5);
      color: #fff;
    }
    #mtls3u22f1l2gq2kl6 .hbar-table-row.emitter {
      box-shadow: 0 0 1px rgba(0, 29, 84, 0.8) inset, 5px 0 0 rgba(0, 29, 84, 0.8) !important;
    }
    #mtls3u22f1l2gq2kl6 .hbar-table-row.emitter .hbar-bucketer-cell {
      background: rgba(0, 29, 84, 0.8) !important;
      color: #fff !important;
    }
    #mtls3u22f1l2gq2kl6 .hbar-table-row .plot-entity.emitter {
      outline: 1px solid #001d54;
      box-shadow: 0 0 3px #001d54 inset;
    }
  #mtls3u22f1l2gq2kl6 .tile-footer-label {
      color: #001d54;
      font-size: 13px;
      height: 26px;
      line-height: 26px;
      font-weight: bold;
      font-style: normal;
      text-align: center;
    }
        #mtls3u22f1l2gq2kl6 g.axis.bottom g.tick text,
        #mtls3u22f1l2gq2kl6 g.axis.bottom text.minima-ticks,
        #mtls3u22f1l2gq2kl6 g.axis.bottom text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u22f1l2gq2kl6 g.axis.bottom g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u22f1l2gq2kl6 .axis-label.y-axis {
        color: #001d54;
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3u22f1l2gq2kl6 g.y.axis.left g.tick text,
        #mtls3u22f1l2gq2kl6 g.y.axis.left text.minima-ticks,
        #mtls3u22f1l2gq2kl6 g.y.axis.left text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u22f1l2gq2kl6 g.y.axis.left g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u22f1l2gq2kl6 .axis-label.y-axis-right {
        color: #001d54;
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3u22f1l2gq2kl6 g.y.axis.right g.tick text,
        #mtls3u22f1l2gq2kl6 g.y.axis.right text.minima-ticks,
        #mtls3u22f1l2gq2kl6 g.y.axis.right text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u22f1l2gq2kl6 g.y.axis.right g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u22f1l2gq2kl6 .axis-label.h-axis {
        color: #001d54;
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3u22f1l2gq2kl6 g.y.axis.top g.tick text,
        #mtls3u22f1l2gq2kl6 g.y.axis.top text.minima-ticks,
        #mtls3u22f1l2gq2kl6 g.y.axis.top text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u22f1l2gq2kl6 g.y.axis.top g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u22f1l2gq2kl6 .hbars-bucketer-label {
      color: #001d54;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      font-style: normal;
      text-align: center;
    }
    #mtls3u22f1l2gq2kl6 .chart-data-label,
    #mtls3u22f1l2gq2kl6 .bar-value-label,
    #mtls3u22f1l2gq2kl6 .line-value-label {
      font-size: 11px;
      font-weight: normal;
      font-style: normal;
    }
  #mtls3u22f1l2gq2kl6 table.tile-table td,#mtls3u22f1l2gq2kl6 table.tile-table th,#mtls3u22f1l2gq2kl6 table.pivot-table tr.auxiliary-row,#mtls3u22f1l2gq2kl6 .db-tile.auxiliary-tile {
    border-color: #cfcfcf;
  }
    #mtls3u22f1l2gq2kl6 .tile-table-wrapper tr td{
        border-bottom: 0.0625rem solid #CFCFCF;
        border-inline-end: 0.0625rem solid #CFCFCF;
    }
    #mtls3u22f1l2gq2kl6 table.tile-table div.stretcher{
        padding: 0 calc(2 * 0.5rem);
    }
    #mtls3u22f1l2gq2kl6 table.tile-table th,
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab td.row-label {
      background: #f3f4fa;
      color: #001d54;
      font-size: 14px;
      line-height: 36px;
      font-weight: bold;
      font-style: normal;
    }
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab th.hand-cursor:hover,
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab td.row-label.hand-cursor:hover {
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset;
      outline: 1px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab th.emitter,
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab td.row-label.emitter {
      box-shadow: 5px 0 0 #001d54 inset !important;
      outline: 1px solid #001d54 !important;
    }
    #mtls3u22f1l2gq2kl6 table.tile-table td {
      color: #001d54;
      font-size: 14px;
      line-height: 36px;
      font-weight: normal;
      font-style: normal;
    }
    #mtls3u22f1l2gq2kl6 .table-cell-bar-parent {
      line-height: 32px
    }
    #mtls3u22f1l2gq2kl6 .table-cell-bar {
      line-height: 32px;
      height: 32px;
    }
    #mtls3u22f1l2gq2kl6 .table-cell-bar span {
      font-size: 14px;
    }
    #mtls3u22f1l2gq2kl6 table.tile-table .chip-text {
      font-size: 14px;
      line-height: 36px;
    }
    #mtls3u22f1l2gq2kl6 table.tile-table:not(.rank-table) tr.hand-cursor:hover,
    #mtls3u22f1l2gq2kl6 table.tile-table.rank-table tr.hand-cursor td.bucketer-cell:hover {
      outline: 1px solid rgba(0, 29, 84, 0.5);
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset, -2px 0 0 rgba(0, 29, 84, 0.5) inset;
    }
    #mtls3u22f1l2gq2kl6 table.tile-table:not(.rank-table) tr.emitter,
    #mtls3u22f1l2gq2kl6 table.tile-table.rank-table tr.emitter td.bucketer-cell {
      outline: 1px solid #001d54 !important;
      box-shadow: 5px 0 0 #001d54 inset, -2px 0 0 #001d54 inset !important;
    }
    #mtls3u22f1l2gq2kl6 table.tile-table .non-chip-text.hand-cursor:hover {
      outline: 1px solid rgba(0, 29, 84, 0.5);
      border-left: 4px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3u22f1l2gq2kl6 table.tile-table .non-chip-text.emitter {
      outline: 1px solid #001d54!important;
      border-left: 4px solid #001d54!important;
    }
    #mtls3u22f1l2gq2kl6 table.tile-table .chip-text.hand-cursor:hover {
      border-color: rgba(0, 29, 84, 0.5);
    }
    #mtls3u22f1l2gq2kl6 table.tile-table .chip-text.emitter {
      border-color: #001d54 !important;
    }
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab td.data-cell.hand-cursor:hover {
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset;
      outline: 1px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab td.data-cell.emitter {
      box-shadow: 5px 0 0 #001d54 inset !important;
      outline: 1px solid #001d54 !important;
    }
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab th.summary,
    #mtls3u22f1l2gq2kl6 .tile-table-container td.row-label.summary {
      background: #f3f4fa;
    }
    #mtls3u22f1l2gq2kl6 .tile-table-container.cross-tab td.data-cell.summary {
      background: #cfcfcf;
    }
    #mtls3u22f1l2gq2kl6 .tile-table.normal-table tr.data-row:nth-child(2n),#mtls3u22f1l2gq2kl6 .tile-table.pivot-table tr.data-row.can-drill-further:nth-child(4n+3),#mtls3u22f1l2gq2kl6 .tile-table.pivot-table tr.data-row:not(.can-drill-further):nth-child(2n) {
      background-color: #fff;
    }</style></div></div></div></div></article></div></div></div></div></div></div><span class="react-resizable-handle react-resizable-handle-se"></span></div><div class="sc-iBYQkv cPDQqc sc-bJYTlW react-grid-item cssTransforms react-resizable-hide react-resizable" dir="ltr" style="width: 788px; height: 272px; position: absolute; transform: translate(16px, 288px);"><div class="sc-fIzWTo frhfnN"><div class="sc-iBYQkv damcRU sc-bIquoJ hMuNxF"><div class="sc-iBYQkv kkmFIc sc-gfbwvm bfUDML"><div class="sc-iBYQkv hmDJhr sc-eGXPLf gcAxKq"><div data-testid="tile-wrapper" class="sc-QCRGo KJqYW"><div class="sc-iBYQkv iyCdVr sc-iVyiaF fdtBOW"><article role="none" class="sc-cUEOzv gjjtlN sc-iBYQkv grkAzG sc-eGXPLf gcAxKq"><header class="sc-dEVLtI hnTZlE sc-iBYQkv giUYVI"><div class="sc-iBYQkv gtrcRv"><div class="sc-iBYQkv eTeWvV"><div class="sc-iBYQkv gHZyaE"><div class="sc-iBYQkv hYSJbi"><h2 title="Monthly Trend of New Client Onboarding" class="sc-ksBlkl cOSRdK sc-buoZyn dYMUif">Monthly Trend of New Client Onboarding</h2></div></div></div></div><div><button data-testid=":menu-button:" id="_wkcuwg5um" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Actions - Monthly Trend of New Client Onboarding" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></header><div class="sc-csDkEv hXpxru sc-iBYQkv grkAzG sc-eGXPLf gcAxKq"><div data-testid="tileContent" class="sc-iBYQkv gChdkV sc-inRRxd kUJQZr"><div class="sc-iBYQkv gGrbdV sc-iBddIK iaMtZc"><div id="mtls3u1ar0k7xj4ppe" class="sc-iBYQkv ldZbRa sc-hJEbIy kJcggF"><div class="sc-iBYQkv ldZbRa sc-cbsmVS exwhFO"><div class="sc-iBYQkv fvIpyo sc-cvNrnN goJNml chart-insight-tile" data-testid="legacyChartContent" dir="ltr"><div aria-label="Line chart showing (Count) Case ID by Created date/time. Chart is vertically oriented. In order to navigate around the chart's plot points, press enter and use your arrow keys to navigate. Use home and end keys to navigate to the first and last data point. When the chart has many data points, you may use the page up and page down keys to navigate to previous and next pages of data." role="application" tabindex="0" class="sc-iBYQkv gLhndj sc-gnUaVU bEietB" style="padding-bottom: 26px;"><div class="db-tile-tooltip force-hide"></div><div class="tile-root-element"><div class="axis-label y-axis" title="Count Case ID" style="width: 186px;">Count Case ID</div><svg class="tile-root-svg" width="564" height="186" focusable="false" aria-hidden="true"><g class="tile-svg-root-group" transform="translate(75, 5)"><line class="line-area-crosshair horizontal" x1="0" x2="484" style="display: none;"></line><line class="line-area-crosshair vertical" y1="0" y2="111" style="display: none;"></line><g class="y axis left" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="currentColor" d="M-6,101H0V10H-6"></path><g class="tick" opacity="1" transform="translate(0,101)"><line stroke="currentColor" x2="487" x1="-3" style="stroke: rgb(0, 29, 84); stroke-opacity: 0.1; stroke-width: 1; shape-rendering: crispedges;"></line><text fill="currentColor" x="-10" dy="0.32em" y="0" transform="rotate(0, -10, 0)" style="text-anchor: end;">1</text></g><g class="tick" opacity="1" transform="translate(0,10)"><line stroke="currentColor" x2="487" x1="-3" style="stroke: rgb(0, 29, 84); stroke-opacity: 0.1; stroke-width: 1; shape-rendering: crispedges;"></line><text fill="currentColor" x="-10" dy="0.32em" y="0" transform="rotate(0, -10, 0)" style="text-anchor: end;">2</text></g></g><g class="x axis bottom" transform="translate(0,111)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="MNaN,6V0HNaNV6"></path></g><g class="tile-plot-area-group" clip-path="url(#clip-path-mtls3u1ar0k7xj4ppe)"><g class="query-mtls3u1ar0k7xj4ppe plot-_count-_case-_i_d main"><g class="plot-sub-group line-area-container" clip-path="url(#clip-path-mtls3u1ar0k7xj4ppe-line-area-clip-mtls3u1p5fkdk5ex2eo)"><defs><clipPath id="clip-path-mtls3u1ar0k7xj4ppe-line-area-clip-mtls3u1p5fkdk5ex2eo"><rect width="484" height="111" x="0" y="0"></rect></clipPath><linearGradient id="mtls3u1ar0k7xj4ppe-line-area-gradient-mtlsieen2dkfll5omvm"></linearGradient></defs><path data-testid="line-chart-element" class="plot-entity line-path-element color-4-stroke query-mtls3u1ar0k7xj4ppe plot-_count-_case-_i_d" style="stroke: url(&quot;#mtls3u1ar0k7xj4ppe-line-area-gradient-mtlsieen2dkfll5omvm&quot;);"></path></g></g></g><defs><clipPath id="clip-path-mtls3u1ar0k7xj4ppe"><rect width="484" height="111"></rect></clipPath><clipPath id="clip-path-mtls3u1ar0k7xj4ppe-x-axis"><rect x="0" y="-111" width="484" height="181"></rect></clipPath><clipPath id="clip-path-mtls3u1ar0k7xj4ppe-y-axis"><rect x="-75" y="0" width="564" height="111"></rect></clipPath><clipPath id="clip-path-mtls3u1ar0k7xj4ppe-y-axis-right"><rect x="-484" y="0" width="489" height="111"></rect></clipPath></defs><g class="line-area-bucket-indicator" style="display: none;"><rect x="NaN" y="-2" width="NaN" height="113"></rect></g></g></svg><i class="x-axis-page-button next" title="Next Page" style="top: 60.5px; right: 5px;"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"></path></svg></i></div><div class="tile-footer-label" title="Created date/time">Created date/time</div></div><div data-testid="legend-container" class="sc-iBYQkv fTHUgM sc-fUaNtZ jlOlGk" style="width: 192px; height: 100%;"><div class="sc-dcLNxc ebYPXk"><div role="group" aria-label="Chart legend items" class="sc-eCEpHu irDraG"><div data-testid="legend-column" class="sc-iBYQkv lmQzYe" style="max-width: 100%;"><div class="sc-fPgsxU gLLuVG" data-popover-target=""><div class="sc-bWZIPN NRpzH"><i class="solid" data-testid="solid-legend-entry-color" style="background: rgb(0, 95, 168);"></i></div><span class="label">Count Case ID</span></div></div></div></div></div><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="sc-jyHmMH eyZPuI"><defs><filter id="mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"></feGaussianBlur><feOffset in="blur" dx="0" dy="0" result="offsetBlur"></feOffset><feMerge><feMergeNode in="offsetBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs></svg></div></div><style>
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-0-fill {
      fill: #fff
    }
    #mtls3u1ar0k7xj4ppe .color-0-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-0-fill.emitter:not(.stroke-highlighting) {
      fill: #e6e6e6
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-0-stroke {
      stroke: #fff
    }
    #mtls3u1ar0k7xj4ppe .color-0-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-0-stroke.emitter {
      stroke: #e6e6e6
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-0-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-0-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-0-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-0-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-0-color {
      color: #fff;
    }
    #mtls3u1ar0k7xj4ppe .color-0-background {
      background-color: #fff;
    }
    #mtls3u1ar0k7xj4ppe .color-0-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-0-background.emitter {
      background-color: #e6e6e6;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-1-fill {
      fill: #ffffff
    }
    #mtls3u1ar0k7xj4ppe .color-1-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-1-fill.emitter:not(.stroke-highlighting) {
      fill: #e6e6e6
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-1-stroke {
      stroke: #ffffff
    }
    #mtls3u1ar0k7xj4ppe .color-1-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-1-stroke.emitter {
      stroke: #e6e6e6
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-1-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-1-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-1-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-1-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-1-color {
      color: #ffffff;
    }
    #mtls3u1ar0k7xj4ppe .color-1-background {
      background-color: #ffffff;
    }
    #mtls3u1ar0k7xj4ppe .color-1-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-1-background.emitter {
      background-color: #e6e6e6;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-2-fill {
      fill: #000
    }
    #mtls3u1ar0k7xj4ppe .color-2-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-2-fill.emitter:not(.stroke-highlighting) {
      fill: #333
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-2-stroke {
      stroke: #000
    }
    #mtls3u1ar0k7xj4ppe .color-2-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-2-stroke.emitter {
      stroke: #333
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-2-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-2-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-2-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-2-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-2-color {
      color: #000;
    }
    #mtls3u1ar0k7xj4ppe .color-2-background {
      background-color: #000;
    }
    #mtls3u1ar0k7xj4ppe .color-2-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-2-background.emitter {
      background-color: #333;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-3-fill {
      fill: #000000
    }
    #mtls3u1ar0k7xj4ppe .color-3-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-3-fill.emitter:not(.stroke-highlighting) {
      fill: #333
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-3-stroke {
      stroke: #000000
    }
    #mtls3u1ar0k7xj4ppe .color-3-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-3-stroke.emitter {
      stroke: #333
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-3-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-3-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-3-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-3-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-3-color {
      color: #000000;
    }
    #mtls3u1ar0k7xj4ppe .color-3-background {
      background-color: #000000;
    }
    #mtls3u1ar0k7xj4ppe .color-3-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-3-background.emitter {
      background-color: #333;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-4-fill {
      fill: #005fa8
    }
    #mtls3u1ar0k7xj4ppe .color-4-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-4-fill.emitter:not(.stroke-highlighting) {
      fill: #004275
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-4-stroke {
      stroke: #005fa8
    }
    #mtls3u1ar0k7xj4ppe .color-4-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-4-stroke.emitter {
      stroke: #004275
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-4-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-4-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-4-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-4-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-4-color {
      color: #005fa8;
    }
    #mtls3u1ar0k7xj4ppe .color-4-background {
      background-color: #005fa8;
    }
    #mtls3u1ar0k7xj4ppe .color-4-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-4-background.emitter {
      background-color: #004275;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-5-fill {
      fill: #00a89a
    }
    #mtls3u1ar0k7xj4ppe .color-5-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-5-fill.emitter:not(.stroke-highlighting) {
      fill: #00756b
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-5-stroke {
      stroke: #00a89a
    }
    #mtls3u1ar0k7xj4ppe .color-5-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-5-stroke.emitter {
      stroke: #00756b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-5-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-5-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-5-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-5-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-5-color {
      color: #00a89a;
    }
    #mtls3u1ar0k7xj4ppe .color-5-background {
      background-color: #00a89a;
    }
    #mtls3u1ar0k7xj4ppe .color-5-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-5-background.emitter {
      background-color: #00756b;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-6-fill {
      fill: #ffb647
    }
    #mtls3u1ar0k7xj4ppe .color-6-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-6-fill.emitter:not(.stroke-highlighting) {
      fill: #ffa214
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-6-stroke {
      stroke: #ffb647
    }
    #mtls3u1ar0k7xj4ppe .color-6-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-6-stroke.emitter {
      stroke: #ffa214
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-6-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-6-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-6-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-6-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-6-color {
      color: #ffb647;
    }
    #mtls3u1ar0k7xj4ppe .color-6-background {
      background-color: #ffb647;
    }
    #mtls3u1ar0k7xj4ppe .color-6-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-6-background.emitter {
      background-color: #ffa214;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-7-fill {
      fill: #27823d
    }
    #mtls3u1ar0k7xj4ppe .color-7-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-7-fill.emitter:not(.stroke-highlighting) {
      fill: #1b5b2b
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-7-stroke {
      stroke: #27823d
    }
    #mtls3u1ar0k7xj4ppe .color-7-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-7-stroke.emitter {
      stroke: #1b5b2b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-7-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-7-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-7-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-7-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-7-color {
      color: #27823d;
    }
    #mtls3u1ar0k7xj4ppe .color-7-background {
      background-color: #27823d;
    }
    #mtls3u1ar0k7xj4ppe .color-7-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-7-background.emitter {
      background-color: #1b5b2b;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-8-fill {
      fill: #ff873d
    }
    #mtls3u1ar0k7xj4ppe .color-8-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-8-fill.emitter:not(.stroke-highlighting) {
      fill: #ff670a
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-8-stroke {
      stroke: #ff873d
    }
    #mtls3u1ar0k7xj4ppe .color-8-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-8-stroke.emitter {
      stroke: #ff670a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-8-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-8-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-8-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-8-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-8-color {
      color: #ff873d;
    }
    #mtls3u1ar0k7xj4ppe .color-8-background {
      background-color: #ff873d;
    }
    #mtls3u1ar0k7xj4ppe .color-8-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-8-background.emitter {
      background-color: #ff670a;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-9-fill {
      fill: #da4644
    }
    #mtls3u1ar0k7xj4ppe .color-9-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-9-fill.emitter:not(.stroke-highlighting) {
      fill: #c42927
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-9-stroke {
      stroke: #da4644
    }
    #mtls3u1ar0k7xj4ppe .color-9-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-9-stroke.emitter {
      stroke: #c42927
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-9-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-9-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-9-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-9-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-9-color {
      color: #da4644;
    }
    #mtls3u1ar0k7xj4ppe .color-9-background {
      background-color: #da4644;
    }
    #mtls3u1ar0k7xj4ppe .color-9-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-9-background.emitter {
      background-color: #c42927;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-10-fill {
      fill: #7d5fbf
    }
    #mtls3u1ar0k7xj4ppe .color-10-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-10-fill.emitter:not(.stroke-highlighting) {
      fill: #6343a8
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-10-stroke {
      stroke: #7d5fbf
    }
    #mtls3u1ar0k7xj4ppe .color-10-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-10-stroke.emitter {
      stroke: #6343a8
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-10-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-10-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-10-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-10-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-10-color {
      color: #7d5fbf;
    }
    #mtls3u1ar0k7xj4ppe .color-10-background {
      background-color: #7d5fbf;
    }
    #mtls3u1ar0k7xj4ppe .color-10-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-10-background.emitter {
      background-color: #6343a8;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-11-fill {
      fill: #ff8080
    }
    #mtls3u1ar0k7xj4ppe .color-11-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-11-fill.emitter:not(.stroke-highlighting) {
      fill: #ff4d4d
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-11-stroke {
      stroke: #ff8080
    }
    #mtls3u1ar0k7xj4ppe .color-11-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-11-stroke.emitter {
      stroke: #ff4d4d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-11-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-11-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-11-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-11-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-11-color {
      color: #ff8080;
    }
    #mtls3u1ar0k7xj4ppe .color-11-background {
      background-color: #ff8080;
    }
    #mtls3u1ar0k7xj4ppe .color-11-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-11-background.emitter {
      background-color: #ff4d4d;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-12-fill {
      fill: #8e5025
    }
    #mtls3u1ar0k7xj4ppe .color-12-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-12-fill.emitter:not(.stroke-highlighting) {
      fill: #66391a
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-12-stroke {
      stroke: #8e5025
    }
    #mtls3u1ar0k7xj4ppe .color-12-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-12-stroke.emitter {
      stroke: #66391a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-12-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-12-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-12-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-12-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-12-color {
      color: #8e5025;
    }
    #mtls3u1ar0k7xj4ppe .color-12-background {
      background-color: #8e5025;
    }
    #mtls3u1ar0k7xj4ppe .color-12-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-12-background.emitter {
      background-color: #66391a;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-13-fill {
      fill: #b0a19c
    }
    #mtls3u1ar0k7xj4ppe .color-13-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-13-fill.emitter:not(.stroke-highlighting) {
      fill: #998680
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-13-stroke {
      stroke: #b0a19c
    }
    #mtls3u1ar0k7xj4ppe .color-13-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-13-stroke.emitter {
      stroke: #998680
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-13-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-13-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-13-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-13-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-13-color {
      color: #b0a19c;
    }
    #mtls3u1ar0k7xj4ppe .color-13-background {
      background-color: #b0a19c;
    }
    #mtls3u1ar0k7xj4ppe .color-13-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-13-background.emitter {
      background-color: #998680;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-14-fill {
      fill: #75a1cc
    }
    #mtls3u1ar0k7xj4ppe .color-14-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-14-fill.emitter:not(.stroke-highlighting) {
      fill: #5088be
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-14-stroke {
      stroke: #75a1cc
    }
    #mtls3u1ar0k7xj4ppe .color-14-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-14-stroke.emitter {
      stroke: #5088be
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-14-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-14-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-14-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-14-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-14-color {
      color: #75a1cc;
    }
    #mtls3u1ar0k7xj4ppe .color-14-background {
      background-color: #75a1cc;
    }
    #mtls3u1ar0k7xj4ppe .color-14-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-14-background.emitter {
      background-color: #5088be;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-15-fill {
      fill: #80cbc5
    }
    #mtls3u1ar0k7xj4ppe .color-15-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-15-fill.emitter:not(.stroke-highlighting) {
      fill: #5cbcb4
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-15-stroke {
      stroke: #80cbc5
    }
    #mtls3u1ar0k7xj4ppe .color-15-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-15-stroke.emitter {
      stroke: #5cbcb4
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-15-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-15-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-15-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-15-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-15-color {
      color: #80cbc5;
    }
    #mtls3u1ar0k7xj4ppe .color-15-background {
      background-color: #80cbc5;
    }
    #mtls3u1ar0k7xj4ppe .color-15-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-15-background.emitter {
      background-color: #5cbcb4;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-16-fill {
      fill: #ffd494
    }
    #mtls3u1ar0k7xj4ppe .color-16-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-16-fill.emitter:not(.stroke-highlighting) {
      fill: #ffc061
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-16-stroke {
      stroke: #ffd494
    }
    #mtls3u1ar0k7xj4ppe .color-16-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-16-stroke.emitter {
      stroke: #ffc061
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-16-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-16-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-16-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-16-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-16-color {
      color: #ffd494;
    }
    #mtls3u1ar0k7xj4ppe .color-16-background {
      background-color: #ffd494;
    }
    #mtls3u1ar0k7xj4ppe .color-16-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-16-background.emitter {
      background-color: #ffc061;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-17-fill {
      fill: #84b390
    }
    #mtls3u1ar0k7xj4ppe .color-17-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-17-fill.emitter:not(.stroke-highlighting) {
      fill: #64a074
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-17-stroke {
      stroke: #84b390
    }
    #mtls3u1ar0k7xj4ppe .color-17-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-17-stroke.emitter {
      stroke: #64a074
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-17-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-17-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-17-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-17-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-17-color {
      color: #84b390;
    }
    #mtls3u1ar0k7xj4ppe .color-17-background {
      background-color: #84b390;
    }
    #mtls3u1ar0k7xj4ppe .color-17-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-17-background.emitter {
      background-color: #64a074;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-18-fill {
      fill: #ffba8f
    }
    #mtls3u1ar0k7xj4ppe .color-18-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-18-fill.emitter:not(.stroke-highlighting) {
      fill: #ff9b5c
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-18-stroke {
      stroke: #ffba8f
    }
    #mtls3u1ar0k7xj4ppe .color-18-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-18-stroke.emitter {
      stroke: #ff9b5c
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-18-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-18-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-18-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-18-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-18-color {
      color: #ffba8f;
    }
    #mtls3u1ar0k7xj4ppe .color-18-background {
      background-color: #ffba8f;
    }
    #mtls3u1ar0k7xj4ppe .color-18-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-18-background.emitter {
      background-color: #ff9b5c;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-19-fill {
      fill: #ed9391
    }
    #mtls3u1ar0k7xj4ppe .color-19-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-19-fill.emitter:not(.stroke-highlighting) {
      fill: #e66865
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-19-stroke {
      stroke: #ed9391
    }
    #mtls3u1ar0k7xj4ppe .color-19-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-19-stroke.emitter {
      stroke: #e66865
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-19-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-19-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-19-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-19-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-19-color {
      color: #ed9391;
    }
    #mtls3u1ar0k7xj4ppe .color-19-background {
      background-color: #ed9391;
    }
    #mtls3u1ar0k7xj4ppe .color-19-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-19-background.emitter {
      background-color: #e66865;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-20-fill {
      fill: #beaee0
    }
    #mtls3u1ar0k7xj4ppe .color-20-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-20-fill.emitter:not(.stroke-highlighting) {
      fill: #a089d2
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-20-stroke {
      stroke: #beaee0
    }
    #mtls3u1ar0k7xj4ppe .color-20-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-20-stroke.emitter {
      stroke: #a089d2
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-20-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-20-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-20-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-20-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-20-color {
      color: #beaee0;
    }
    #mtls3u1ar0k7xj4ppe .color-20-background {
      background-color: #beaee0;
    }
    #mtls3u1ar0k7xj4ppe .color-20-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-20-background.emitter {
      background-color: #a089d2;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-21-fill {
      fill: #ffb3b3
    }
    #mtls3u1ar0k7xj4ppe .color-21-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-21-fill.emitter:not(.stroke-highlighting) {
      fill: #ff8080
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-21-stroke {
      stroke: #ffb3b3
    }
    #mtls3u1ar0k7xj4ppe .color-21-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-21-stroke.emitter {
      stroke: #ff8080
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-21-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-21-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-21-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-21-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-21-color {
      color: #ffb3b3;
    }
    #mtls3u1ar0k7xj4ppe .color-21-background {
      background-color: #ffb3b3;
    }
    #mtls3u1ar0k7xj4ppe .color-21-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-21-background.emitter {
      background-color: #ff8080;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-22-fill {
      fill: #bd997f
    }
    #mtls3u1ar0k7xj4ppe .color-22-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-22-fill.emitter:not(.stroke-highlighting) {
      fill: #ac7e5d
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-22-stroke {
      stroke: #bd997f
    }
    #mtls3u1ar0k7xj4ppe .color-22-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-22-stroke.emitter {
      stroke: #ac7e5d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-22-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-22-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-22-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-22-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-22-color {
      color: #bd997f;
    }
    #mtls3u1ar0k7xj4ppe .color-22-background {
      background-color: #bd997f;
    }
    #mtls3u1ar0k7xj4ppe .color-22-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-22-background.emitter {
      background-color: #ac7e5d;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-23-fill {
      fill: #cec7c5
    }
    #mtls3u1ar0k7xj4ppe .color-23-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-23-fill.emitter:not(.stroke-highlighting) {
      fill: #b7aca9
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-23-stroke {
      stroke: #cec7c5
    }
    #mtls3u1ar0k7xj4ppe .color-23-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-23-stroke.emitter {
      stroke: #b7aca9
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-23-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-23-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-23-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-23-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-23-color {
      color: #cec7c5;
    }
    #mtls3u1ar0k7xj4ppe .color-23-background {
      background-color: #cec7c5;
    }
    #mtls3u1ar0k7xj4ppe .color-23-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-23-background.emitter {
      background-color: #b7aca9;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-24-fill {
      fill: #db4642
    }
    #mtls3u1ar0k7xj4ppe .color-24-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-24-fill.emitter:not(.stroke-highlighting) {
      fill: #c52a25
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-24-stroke {
      stroke: #db4642
    }
    #mtls3u1ar0k7xj4ppe .color-24-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-24-stroke.emitter {
      stroke: #c52a25
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-24-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-24-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-24-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-24-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-24-color {
      color: #db4642;
    }
    #mtls3u1ar0k7xj4ppe .color-24-background {
      background-color: #db4642;
    }
    #mtls3u1ar0k7xj4ppe .color-24-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-24-background.emitter {
      background-color: #c52a25;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-25-fill {
      fill: #ff863d
    }
    #mtls3u1ar0k7xj4ppe .color-25-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-25-fill.emitter:not(.stroke-highlighting) {
      fill: #ff660a
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-25-stroke {
      stroke: #ff863d
    }
    #mtls3u1ar0k7xj4ppe .color-25-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-25-stroke.emitter {
      stroke: #ff660a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-25-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-25-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-25-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-25-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-25-color {
      color: #ff863d;
    }
    #mtls3u1ar0k7xj4ppe .color-25-background {
      background-color: #ff863d;
    }
    #mtls3u1ar0k7xj4ppe .color-25-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-25-background.emitter {
      background-color: #ff660a;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-26-fill {
      fill: #ffb646
    }
    #mtls3u1ar0k7xj4ppe .color-26-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-26-fill.emitter:not(.stroke-highlighting) {
      fill: #ffa213
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-26-stroke {
      stroke: #ffb646
    }
    #mtls3u1ar0k7xj4ppe .color-26-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-26-stroke.emitter {
      stroke: #ffa213
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-26-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-26-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-26-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-26-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-26-color {
      color: #ffb646;
    }
    #mtls3u1ar0k7xj4ppe .color-26-background {
      background-color: #ffb646;
    }
    #mtls3u1ar0k7xj4ppe .color-26-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-26-background.emitter {
      background-color: #ffa213;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-27-fill {
      fill: #fde980
    }
    #mtls3u1ar0k7xj4ppe .color-27-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-27-fill.emitter:not(.stroke-highlighting) {
      fill: #fce04e
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-27-stroke {
      stroke: #fde980
    }
    #mtls3u1ar0k7xj4ppe .color-27-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-27-stroke.emitter {
      stroke: #fce04e
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-27-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-27-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-27-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-27-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-27-color {
      color: #fde980;
    }
    #mtls3u1ar0k7xj4ppe .color-27-background {
      background-color: #fde980;
    }
    #mtls3u1ar0k7xj4ppe .color-27-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-27-background.emitter {
      background-color: #fce04e;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-28-fill {
      fill: #66cc66
    }
    #mtls3u1ar0k7xj4ppe .color-28-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-28-fill.emitter:not(.stroke-highlighting) {
      fill: #40bf40
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-28-stroke {
      stroke: #66cc66
    }
    #mtls3u1ar0k7xj4ppe .color-28-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-28-stroke.emitter {
      stroke: #40bf40
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-28-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-28-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-28-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-28-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-28-color {
      color: #66cc66;
    }
    #mtls3u1ar0k7xj4ppe .color-28-background {
      background-color: #66cc66;
    }
    #mtls3u1ar0k7xj4ppe .color-28-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-28-background.emitter {
      background-color: #40bf40;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-29-fill {
      fill: #7f92a1
    }
    #mtls3u1ar0k7xj4ppe .color-29-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-29-fill.emitter:not(.stroke-highlighting) {
      fill: #647989
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-29-stroke {
      stroke: #7f92a1
    }
    #mtls3u1ar0k7xj4ppe .color-29-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-29-stroke.emitter {
      stroke: #647989
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-29-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-29-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-29-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-29-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-29-color {
      color: #7f92a1;
    }
    #mtls3u1ar0k7xj4ppe .color-29-background {
      background-color: #7f92a1;
    }
    #mtls3u1ar0k7xj4ppe .color-29-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-29-background.emitter {
      background-color: #647989;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-30-fill {
      fill: #1c1c1c
    }
    #mtls3u1ar0k7xj4ppe .color-30-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-30-fill.emitter:not(.stroke-highlighting) {
      fill: #4f4f4f
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-30-stroke {
      stroke: #1c1c1c
    }
    #mtls3u1ar0k7xj4ppe .color-30-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-30-stroke.emitter {
      stroke: #4f4f4f
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-30-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-30-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-30-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-30-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-30-color {
      color: #1c1c1c;
    }
    #mtls3u1ar0k7xj4ppe .color-30-background {
      background-color: #1c1c1c;
    }
    #mtls3u1ar0k7xj4ppe .color-30-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-30-background.emitter {
      background-color: #4f4f4f;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-31-fill {
      fill: #004d94
    }
    #mtls3u1ar0k7xj4ppe .color-31-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-31-fill.emitter:not(.stroke-highlighting) {
      fill: #0082fa
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-31-stroke {
      stroke: #004d94
    }
    #mtls3u1ar0k7xj4ppe .color-31-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-31-stroke.emitter {
      stroke: #0082fa
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-31-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-31-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-31-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-31-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-31-color {
      color: #004d94;
    }
    #mtls3u1ar0k7xj4ppe .color-31-background {
      background-color: #004d94;
    }
    #mtls3u1ar0k7xj4ppe .color-31-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-31-background.emitter {
      background-color: #0082fa;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-32-fill {
      fill: #009487
    }
    #mtls3u1ar0k7xj4ppe .color-32-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-32-fill.emitter:not(.stroke-highlighting) {
      fill: #00fae4
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-32-stroke {
      stroke: #009487
    }
    #mtls3u1ar0k7xj4ppe .color-32-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-32-stroke.emitter {
      stroke: #00fae4
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-32-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-32-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-32-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-32-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-32-color {
      color: #009487;
    }
    #mtls3u1ar0k7xj4ppe .color-32-background {
      background-color: #009487;
    }
    #mtls3u1ar0k7xj4ppe .color-32-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-32-background.emitter {
      background-color: #00fae4;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-33-fill {
      fill: #feb13d
    }
    #mtls3u1ar0k7xj4ppe .color-33-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-33-fill.emitter:not(.stroke-highlighting) {
      fill: #fe9d0a
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-33-stroke {
      stroke: #feb13d
    }
    #mtls3u1ar0k7xj4ppe .color-33-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-33-stroke.emitter {
      stroke: #fe9d0a
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-33-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-33-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-33-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-33-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-33-color {
      color: #feb13d;
    }
    #mtls3u1ar0k7xj4ppe .color-33-background {
      background-color: #feb13d;
    }
    #mtls3u1ar0k7xj4ppe .color-33-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-33-background.emitter {
      background-color: #fe9d0a;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-34-fill {
      fill: #1f7233
    }
    #mtls3u1ar0k7xj4ppe .color-34-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-34-fill.emitter:not(.stroke-highlighting) {
      fill: #35c257
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-34-stroke {
      stroke: #1f7233
    }
    #mtls3u1ar0k7xj4ppe .color-34-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-34-stroke.emitter {
      stroke: #35c257
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-34-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-34-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-34-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-34-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-34-color {
      color: #1f7233;
    }
    #mtls3u1ar0k7xj4ppe .color-34-background {
      background-color: #1f7233;
    }
    #mtls3u1ar0k7xj4ppe .color-34-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-34-background.emitter {
      background-color: #35c257;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-35-fill {
      fill: #ff741e
    }
    #mtls3u1ar0k7xj4ppe .color-35-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-35-fill.emitter:not(.stroke-highlighting) {
      fill: #ea5900
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-35-stroke {
      stroke: #ff741e
    }
    #mtls3u1ar0k7xj4ppe .color-35-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-35-stroke.emitter {
      stroke: #ea5900
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-35-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-35-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-35-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-35-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-35-color {
      color: #ff741e;
    }
    #mtls3u1ar0k7xj4ppe .color-35-background {
      background-color: #ff741e;
    }
    #mtls3u1ar0k7xj4ppe .color-35-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-35-background.emitter {
      background-color: #ea5900;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-36-fill {
      fill: #c72623
    }
    #mtls3u1ar0k7xj4ppe .color-36-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-36-fill.emitter:not(.stroke-highlighting) {
      fill: #9c1e1b
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-36-stroke {
      stroke: #c72623
    }
    #mtls3u1ar0k7xj4ppe .color-36-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-36-stroke.emitter {
      stroke: #9c1e1b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-36-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-36-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-36-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-36-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-36-color {
      color: #c72623;
    }
    #mtls3u1ar0k7xj4ppe .color-36-background {
      background-color: #c72623;
    }
    #mtls3u1ar0k7xj4ppe .color-36-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-36-background.emitter {
      background-color: #9c1e1b;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-37-fill {
      fill: #7151b4
    }
    #mtls3u1ar0k7xj4ppe .color-37-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-37-fill.emitter:not(.stroke-highlighting) {
      fill: #5a3f93
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-37-stroke {
      stroke: #7151b4
    }
    #mtls3u1ar0k7xj4ppe .color-37-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-37-stroke.emitter {
      stroke: #5a3f93
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-37-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-37-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-37-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-37-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-37-color {
      color: #7151b4;
    }
    #mtls3u1ar0k7xj4ppe .color-37-background {
      background-color: #7151b4;
    }
    #mtls3u1ar0k7xj4ppe .color-37-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-37-background.emitter {
      background-color: #5a3f93;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-38-fill {
      fill: #ff6e6e
    }
    #mtls3u1ar0k7xj4ppe .color-38-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-38-fill.emitter:not(.stroke-highlighting) {
      fill: #ff3b3b
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-38-stroke {
      stroke: #ff6e6e
    }
    #mtls3u1ar0k7xj4ppe .color-38-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-38-stroke.emitter {
      stroke: #ff3b3b
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-38-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-38-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-38-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-38-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-38-color {
      color: #ff6e6e;
    }
    #mtls3u1ar0k7xj4ppe .color-38-background {
      background-color: #ff6e6e;
    }
    #mtls3u1ar0k7xj4ppe .color-38-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-38-background.emitter {
      background-color: #ff3b3b;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-39-fill {
      fill: #82481f
    }
    #mtls3u1ar0k7xj4ppe .color-39-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-39-fill.emitter:not(.stroke-highlighting) {
      fill: #593115
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-39-stroke {
      stroke: #82481f
    }
    #mtls3u1ar0k7xj4ppe .color-39-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-39-stroke.emitter {
      stroke: #593115
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-39-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-39-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-39-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-39-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-39-color {
      color: #82481f;
    }
    #mtls3u1ar0k7xj4ppe .color-39-background {
      background-color: #82481f;
    }
    #mtls3u1ar0k7xj4ppe .color-39-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-39-background.emitter {
      background-color: #593115;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-40-fill {
      fill: #a49590
    }
    #mtls3u1ar0k7xj4ppe .color-40-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-40-fill.emitter:not(.stroke-highlighting) {
      fill: #8d7a74
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-40-stroke {
      stroke: #a49590
    }
    #mtls3u1ar0k7xj4ppe .color-40-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-40-stroke.emitter {
      stroke: #8d7a74
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-40-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-40-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-40-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-40-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #000000;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-40-color {
      color: #a49590;
    }
    #mtls3u1ar0k7xj4ppe .color-40-background {
      background-color: #a49590;
    }
    #mtls3u1ar0k7xj4ppe .color-40-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-40-background.emitter {
      background-color: #8d7a74;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-41-fill {
      fill: #1e578e
    }
    #mtls3u1ar0k7xj4ppe .color-41-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-41-fill.emitter:not(.stroke-highlighting) {
      fill: #153d64
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-41-stroke {
      stroke: #1e578e
    }
    #mtls3u1ar0k7xj4ppe .color-41-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-41-stroke.emitter {
      stroke: #153d64
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-41-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-41-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-41-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-41-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-41-color {
      color: #1e578e;
    }
    #mtls3u1ar0k7xj4ppe .color-41-background {
      background-color: #1e578e;
    }
    #mtls3u1ar0k7xj4ppe .color-41-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-41-background.emitter {
      background-color: #153d64;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-42-fill {
      fill: #0f776e
    }
    #mtls3u1ar0k7xj4ppe .color-42-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-42-fill.emitter:not(.stroke-highlighting) {
      fill: #1ad2c2
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-42-stroke {
      stroke: #0f776e
    }
    #mtls3u1ar0k7xj4ppe .color-42-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-42-stroke.emitter {
      stroke: #1ad2c2
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-42-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-42-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-42-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-42-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-42-color {
      color: #0f776e;
    }
    #mtls3u1ar0k7xj4ppe .color-42-background {
      background-color: #0f776e;
    }
    #mtls3u1ar0k7xj4ppe .color-42-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-42-background.emitter {
      background-color: #1ad2c2;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-43-fill {
      fill: #a94367
    }
    #mtls3u1ar0k7xj4ppe .color-43-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-43-fill.emitter:not(.stroke-highlighting) {
      fill: #843551
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-43-stroke {
      stroke: #a94367
    }
    #mtls3u1ar0k7xj4ppe .color-43-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-43-stroke.emitter {
      stroke: #843551
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-43-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-43-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-43-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-43-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-43-color {
      color: #a94367;
    }
    #mtls3u1ar0k7xj4ppe .color-43-background {
      background-color: #a94367;
    }
    #mtls3u1ar0k7xj4ppe .color-43-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-43-background.emitter {
      background-color: #843551;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-44-fill {
      fill: #6b498a
    }
    #mtls3u1ar0k7xj4ppe .color-44-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-44-fill.emitter:not(.stroke-highlighting) {
      fill: #513769
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-44-stroke {
      stroke: #6b498a
    }
    #mtls3u1ar0k7xj4ppe .color-44-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-44-stroke.emitter {
      stroke: #513769
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-44-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-44-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-44-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-44-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-44-color {
      color: #6b498a;
    }
    #mtls3u1ar0k7xj4ppe .color-44-background {
      background-color: #6b498a;
    }
    #mtls3u1ar0k7xj4ppe .color-44-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-44-background.emitter {
      background-color: #513769;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-45-fill {
      fill: #6e3e90
    }
    #mtls3u1ar0k7xj4ppe .color-45-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-45-fill.emitter:not(.stroke-highlighting) {
      fill: #532f6c
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-45-stroke {
      stroke: #6e3e90
    }
    #mtls3u1ar0k7xj4ppe .color-45-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-45-stroke.emitter {
      stroke: #532f6c
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-45-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-45-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-45-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-45-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-45-color {
      color: #6e3e90;
    }
    #mtls3u1ar0k7xj4ppe .color-45-background {
      background-color: #6e3e90;
    }
    #mtls3u1ar0k7xj4ppe .color-45-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-45-background.emitter {
      background-color: #532f6c;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-46-fill {
      fill: #e66342
    }
    #mtls3u1ar0k7xj4ppe .color-46-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-46-fill.emitter:not(.stroke-highlighting) {
      fill: #d8421d
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-46-stroke {
      stroke: #e66342
    }
    #mtls3u1ar0k7xj4ppe .color-46-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-46-stroke.emitter {
      stroke: #d8421d
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-46-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-46-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-46-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-46-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-46-color {
      color: #e66342;
    }
    #mtls3u1ar0k7xj4ppe .color-46-background {
      background-color: #e66342;
    }
    #mtls3u1ar0k7xj4ppe .color-46-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-46-background.emitter {
      background-color: #d8421d;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-47-fill {
      fill: #cb3b59
    }
    #mtls3u1ar0k7xj4ppe .color-47-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-47-fill.emitter:not(.stroke-highlighting) {
      fill: #a72c46
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-47-stroke {
      stroke: #cb3b59
    }
    #mtls3u1ar0k7xj4ppe .color-47-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-47-stroke.emitter {
      stroke: #a72c46
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-47-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-47-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-47-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-47-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-47-color {
      color: #cb3b59;
    }
    #mtls3u1ar0k7xj4ppe .color-47-background {
      background-color: #cb3b59;
    }
    #mtls3u1ar0k7xj4ppe .color-47-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-47-background.emitter {
      background-color: #a72c46;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-48-fill {
      fill: #d53bb1
    }
    #mtls3u1ar0k7xj4ppe .color-48-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-48-fill.emitter:not(.stroke-highlighting) {
      fill: #b62795
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-48-stroke {
      stroke: #d53bb1
    }
    #mtls3u1ar0k7xj4ppe .color-48-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-48-stroke.emitter {
      stroke: #b62795
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-48-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-48-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-48-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-48-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-48-color {
      color: #d53bb1;
    }
    #mtls3u1ar0k7xj4ppe .color-48-background {
      background-color: #d53bb1;
    }
    #mtls3u1ar0k7xj4ppe .color-48-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-48-background.emitter {
      background-color: #b62795;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-49-fill {
      fill: #255c9c
    }
    #mtls3u1ar0k7xj4ppe .color-49-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-49-fill.emitter:not(.stroke-highlighting) {
      fill: #1b4473
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-49-stroke {
      stroke: #255c9c
    }
    #mtls3u1ar0k7xj4ppe .color-49-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-49-stroke.emitter {
      stroke: #1b4473
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-49-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-49-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-49-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-49-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-49-color {
      color: #255c9c;
    }
    #mtls3u1ar0k7xj4ppe .color-49-background {
      background-color: #255c9c;
    }
    #mtls3u1ar0k7xj4ppe .color-49-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-49-background.emitter {
      background-color: #1b4473;
    }
  
    /* FILL */
    #mtls3u1ar0k7xj4ppe .color-50-fill {
      fill: #73669d
    }
    #mtls3u1ar0k7xj4ppe .color-50-fill.highlighted:not(.stroke-highlighting),
    #mtls3u1ar0k7xj4ppe .color-50-fill.emitter:not(.stroke-highlighting) {
      fill: #5c517f
    }

    /* STROKE */
    #mtls3u1ar0k7xj4ppe .color-50-stroke {
      stroke: #73669d
    }
    #mtls3u1ar0k7xj4ppe .color-50-stroke.highlighted,
    #mtls3u1ar0k7xj4ppe .color-50-stroke.emitter {
      stroke: #5c517f
    }

    /* Highlighting using Drop-Shadow */
    #mtls3u1ar0k7xj4ppe .color-50-stroke.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-50-stroke.stroke-highlighting.emitter,
    #mtls3u1ar0k7xj4ppe .color-50-fill.stroke-highlighting.highlighted,
    #mtls3u1ar0k7xj4ppe .color-50-fill.stroke-highlighting.emitter {
      filter: url(#mtls3u1ar0k7xj4ppe-bi-chart-svg-drop-shadow);
      stroke: #FFFFFF;
      stroke-width: 2 !important;
    }

    /* COLOR, BACKGROUND for non-SVG elements */
    #mtls3u1ar0k7xj4ppe .color-50-color {
      color: #73669d;
    }
    #mtls3u1ar0k7xj4ppe .color-50-background {
      background-color: #73669d;
    }
    #mtls3u1ar0k7xj4ppe .color-50-background.highlighted,
    #mtls3u1ar0k7xj4ppe .color-50-background.emitter {
      background-color: #5c517f;
    }
  </style><style>
    #mtls3u1ar0k7xj4ppe.db-tile {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    #mtls3u1ar0k7xj4ppe .db-tile-body,#mtls3u1ar0k7xj4ppe .db-tile-animation-tick,#mtls3u1ar0k7xj4ppe .db-tile-visible-legend,#mtls3u1ar0k7xj4ppe .db-tile-tooltip,#mtls3u1ar0k7xj4ppe .tile-no-data-watermark,#mtls3u1ar0k7xj4ppe .leaflet-bar a {
      background: #fff;
      color: #001d54;
    }
    #mtls3u1ar0k7xj4ppe .db-tile-zoom-box,#mtls3u1ar0k7xj4ppe .db-tile-pinch-zoom-box,#mtls3u1ar0k7xj4ppe .selection-chart-block .pega-radio-item:before,#mtls3u1ar0k7xj4ppe .selection-chart-block .circular-checkbox .circle {
      border-color: #001d54 !important
    }
    #mtls3u1ar0k7xj4ppe .gauge-percent-text, #mtls3u1ar0k7xj4ppe .gauge-text-labels-wrapper text, #mtls3u1ar0k7xj4ppe .donut-outside-label {
      fill: #001d54
    }
    #mtls3u1ar0k7xj4ppe .leaflet-bar a:hover { background: #e6e6e6 }
    #mtls3u1ar0k7xj4ppe .line-area-bucket-indicator rect { fill: rgba(0, 29, 84, 0.1) }
    #mtls3u1ar0k7xj4ppe .scatter-drill-highlighter { background: rgba(0, 29, 84, 0.1) }
    #mtls3u1ar0k7xj4ppe .line-area-crosshair { stroke: #001d54 }
    #mtls3u1ar0k7xj4ppe .pin-emitter-indicator line { stroke:#001d54; }
    #mtls3u1ar0k7xj4ppe .pin-emitter-indicator path.outer { fill:#001d54; }
    #mtls3u1ar0k7xj4ppe .pin-emitter-indicator path.inner { fill:#fff; }

    #mtls3u1ar0k7xj4ppe .hbar-bucketer-cell,#mtls3u1ar0k7xj4ppe .hbar-bucketer-cell-child,#mtls3u1ar0k7xj4ppe .hbar-bars-cell .plot-entity span,#mtls3u1ar0k7xj4ppe .selection-chart-block-label,#mtls3u1ar0k7xj4ppe .selection-chart-block .pega-radio-item,#mtls3u1ar0k7xj4ppe .selection-chart-block .circular-checkbox {
      color: #001d54
    }
    #mtls3u1ar0k7xj4ppe .selection-chart-block .circular-checkbox.checked .circle,
    #mtls3u1ar0k7xj4ppe .selection-chart-selector:after {
      background: #001d54
    }
    #mtls3u1ar0k7xj4ppe .selection-chart-block .circular-checkbox .circle i {
      color: #fff
    }
    #mtls3u1ar0k7xj4ppe .selection-chart-selector, #mtls3u1ar0k7xj4ppe .selection-chart-selector .chip {
      border-color: rgba(0, 29, 84, 0.2)
    }
    #mtls3u1ar0k7xj4ppe .hbar-feedback-message, #mtls3u1ar0k7xj4ppe .x-axis-page-button {
      color: #001d54
    }
    #mtls3u1ar0k7xj4ppe .bar-value-label { fill: #001d54 }
    #mtls3u1ar0k7xj4ppe .line-value-label.shadow {
      fill: #fff;
      stroke: #fff;
    }
    #mtls3u1ar0k7xj4ppe .hbar-table-row.hand-cursor:hover,
    #mtls3u1ar0k7xj4ppe .hbar-table-row.hand-cursor:focus,
    #mtls3u1ar0k7xj4ppe .hbar-table-row.hand-cursor:focus-within {
      box-shadow: 0 0 1px rgba(0, 29, 84, 0.5) inset, 5px 0 0 rgba(0, 29, 84, 0.5);
    }
    #mtls3u1ar0k7xj4ppe .hbar-table-row.hand-cursor:hover .hbar-bucketer-cell,
    #mtls3u1ar0k7xj4ppe .hbar-table-row.hand-cursor:focus .hbar-bucketer-cell,
    #mtls3u1ar0k7xj4ppe .hbar-table-row.hand-cursor:focus-within .hbar-bucketer-cell {
      background: rgba(0, 29, 84, 0.5);
      color: #fff;
    }
    #mtls3u1ar0k7xj4ppe .hbar-table-row.emitter {
      box-shadow: 0 0 1px rgba(0, 29, 84, 0.8) inset, 5px 0 0 rgba(0, 29, 84, 0.8) !important;
    }
    #mtls3u1ar0k7xj4ppe .hbar-table-row.emitter .hbar-bucketer-cell {
      background: rgba(0, 29, 84, 0.8) !important;
      color: #fff !important;
    }
    #mtls3u1ar0k7xj4ppe .hbar-table-row .plot-entity.emitter {
      outline: 1px solid #001d54;
      box-shadow: 0 0 3px #001d54 inset;
    }
  #mtls3u1ar0k7xj4ppe .tile-footer-label {
      color: #001d54;
      font-size: 13px;
      height: 26px;
      line-height: 26px;
      font-weight: bold;
      font-style: normal;
      text-align: center;
    }
        #mtls3u1ar0k7xj4ppe g.axis.bottom g.tick text,
        #mtls3u1ar0k7xj4ppe g.axis.bottom text.minima-ticks,
        #mtls3u1ar0k7xj4ppe g.axis.bottom text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u1ar0k7xj4ppe g.axis.bottom g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u1ar0k7xj4ppe .axis-label.y-axis {
        color: #001d54;
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3u1ar0k7xj4ppe g.y.axis.left g.tick text,
        #mtls3u1ar0k7xj4ppe g.y.axis.left text.minima-ticks,
        #mtls3u1ar0k7xj4ppe g.y.axis.left text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u1ar0k7xj4ppe g.y.axis.left g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u1ar0k7xj4ppe .axis-label.y-axis-right {
        color: #001d54;
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3u1ar0k7xj4ppe g.y.axis.right g.tick text,
        #mtls3u1ar0k7xj4ppe g.y.axis.right text.minima-ticks,
        #mtls3u1ar0k7xj4ppe g.y.axis.right text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u1ar0k7xj4ppe g.y.axis.right g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u1ar0k7xj4ppe .axis-label.h-axis {
        color: #001d54;
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
      }
        #mtls3u1ar0k7xj4ppe g.y.axis.top g.tick text,
        #mtls3u1ar0k7xj4ppe g.y.axis.top text.minima-ticks,
        #mtls3u1ar0k7xj4ppe g.y.axis.top text.maxima-ticks {
          fill: #001d54;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
        }
        #mtls3u1ar0k7xj4ppe g.y.axis.top g.tick path.marker {
          fill: #001d54;
          stroke: #001d54;
        }
      #mtls3u1ar0k7xj4ppe .hbars-bucketer-label {
      color: #001d54;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      font-style: normal;
      text-align: center;
    }
    #mtls3u1ar0k7xj4ppe .chart-data-label,
    #mtls3u1ar0k7xj4ppe .bar-value-label,
    #mtls3u1ar0k7xj4ppe .line-value-label {
      font-size: 11px;
      font-weight: normal;
      font-style: normal;
    }
  #mtls3u1ar0k7xj4ppe table.tile-table td,#mtls3u1ar0k7xj4ppe table.tile-table th,#mtls3u1ar0k7xj4ppe table.pivot-table tr.auxiliary-row,#mtls3u1ar0k7xj4ppe .db-tile.auxiliary-tile {
    border-color: #cfcfcf;
  }
    #mtls3u1ar0k7xj4ppe .tile-table-wrapper tr td{
        border-bottom: 0.0625rem solid #CFCFCF;
        border-inline-end: 0.0625rem solid #CFCFCF;
    }
    #mtls3u1ar0k7xj4ppe table.tile-table div.stretcher{
        padding: 0 calc(2 * 0.5rem);
    }
    #mtls3u1ar0k7xj4ppe table.tile-table th,
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab td.row-label {
      background: #f3f4fa;
      color: #001d54;
      font-size: 14px;
      line-height: 36px;
      font-weight: bold;
      font-style: normal;
    }
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab th.hand-cursor:hover,
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab td.row-label.hand-cursor:hover {
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset;
      outline: 1px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab th.emitter,
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab td.row-label.emitter {
      box-shadow: 5px 0 0 #001d54 inset !important;
      outline: 1px solid #001d54 !important;
    }
    #mtls3u1ar0k7xj4ppe table.tile-table td {
      color: #001d54;
      font-size: 14px;
      line-height: 36px;
      font-weight: normal;
      font-style: normal;
    }
    #mtls3u1ar0k7xj4ppe .table-cell-bar-parent {
      line-height: 32px
    }
    #mtls3u1ar0k7xj4ppe .table-cell-bar {
      line-height: 32px;
      height: 32px;
    }
    #mtls3u1ar0k7xj4ppe .table-cell-bar span {
      font-size: 14px;
    }
    #mtls3u1ar0k7xj4ppe table.tile-table .chip-text {
      font-size: 14px;
      line-height: 36px;
    }
    #mtls3u1ar0k7xj4ppe table.tile-table:not(.rank-table) tr.hand-cursor:hover,
    #mtls3u1ar0k7xj4ppe table.tile-table.rank-table tr.hand-cursor td.bucketer-cell:hover {
      outline: 1px solid rgba(0, 29, 84, 0.5);
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset, -2px 0 0 rgba(0, 29, 84, 0.5) inset;
    }
    #mtls3u1ar0k7xj4ppe table.tile-table:not(.rank-table) tr.emitter,
    #mtls3u1ar0k7xj4ppe table.tile-table.rank-table tr.emitter td.bucketer-cell {
      outline: 1px solid #001d54 !important;
      box-shadow: 5px 0 0 #001d54 inset, -2px 0 0 #001d54 inset !important;
    }
    #mtls3u1ar0k7xj4ppe table.tile-table .non-chip-text.hand-cursor:hover {
      outline: 1px solid rgba(0, 29, 84, 0.5);
      border-left: 4px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3u1ar0k7xj4ppe table.tile-table .non-chip-text.emitter {
      outline: 1px solid #001d54!important;
      border-left: 4px solid #001d54!important;
    }
    #mtls3u1ar0k7xj4ppe table.tile-table .chip-text.hand-cursor:hover {
      border-color: rgba(0, 29, 84, 0.5);
    }
    #mtls3u1ar0k7xj4ppe table.tile-table .chip-text.emitter {
      border-color: #001d54 !important;
    }
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab td.data-cell.hand-cursor:hover {
      box-shadow: 5px 0 0 rgba(0, 29, 84, 0.5) inset;
      outline: 1px solid rgba(0, 29, 84, 0.5);
    }
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab td.data-cell.emitter {
      box-shadow: 5px 0 0 #001d54 inset !important;
      outline: 1px solid #001d54 !important;
    }
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab th.summary,
    #mtls3u1ar0k7xj4ppe .tile-table-container td.row-label.summary {
      background: #f3f4fa;
    }
    #mtls3u1ar0k7xj4ppe .tile-table-container.cross-tab td.data-cell.summary {
      background: #cfcfcf;
    }
    #mtls3u1ar0k7xj4ppe .tile-table.normal-table tr.data-row:nth-child(2n),#mtls3u1ar0k7xj4ppe .tile-table.pivot-table tr.data-row.can-drill-further:nth-child(4n+3),#mtls3u1ar0k7xj4ppe .tile-table.pivot-table tr.data-row:not(.can-drill-further):nth-child(2n) {
      background-color: #fff;
    }</style></div></div></div></div></article></div></div></div></div></div></div><span class="react-resizable-handle react-resizable-handle-se"></span></div><div class="sc-iBYQkv cPDQqc sc-bJYTlW kUzHyi react-grid-item cssTransforms react-resizable-hide react-resizable" dir="ltr" style="width: 788px; height: 368px; position: absolute; transform: translate(16px, 576px);"><div class="sc-fIzWTo frhfnN"><div class="sc-iBYQkv damcRU sc-bIquoJ gkTPeB"><div class="sc-iBYQkv kkmFIc sc-gfbwvm bfUDML"><div class="sc-iBYQkv hmDJhr sc-eGXPLf gcAxKq"><div data-testid="tile-wrapper" class="sc-QCRGo KJqYW"><div class="sc-iBYQkv iyCdVr sc-iVyiaF gowPZJ"><article role="none" class="sc-cUEOzv gjjtlN sc-iBYQkv fgeDSl sc-eGXPLf gcAxKq"><div class="sc-csDkEv hXpxru sc-iBYQkv fgeDSl sc-eGXPLf gcAxKq"><div class="sc-iBYQkv cPDQqc sc-inRRxd kUJQZr"><div class="sc-iBYQkv fgeDSl sc-eGXPLf gcAxKq"><div height="585.984375" class="sc-gOTVUQ kKBoGj"><div data-testid=":fullscreen:" data-popover-id="_b2130ydml" class="sc-ezOQGI jfbaKh"><div class="sc-kfNCuK hNPhqk rs-wrapper" style="--col-display-3455204: unset; --col-width-3455204: 165px; --col-left-3455204: 0px; --col-order-3455204: 13; --col-display--141500821: unset; --col-width--141500821: 228px; --col-left--141500821: 0px; --col-order--141500821: 14; --col-display-994772690: unset; --col-width-994772690: 92px; --col-left-994772690: 0px; --col-order-994772690: 15; --col-display-1131181324: unset; --col-width-1131181324: 185px; --col-left-1131181324: 0px; --col-order-1131181324: 16; --col-display-1141520481: unset; --col-width-1141520481: 340px; --col-left-1141520481: 0px; --col-order-1141520481: 17; --col-display-1589451336: unset; --col-width-1589451336: 167px; --col-left-1589451336: 0px; --col-order-1589451336: 18; --col-display-1779834401: unset; --col-width-1779834401: 126px; --col-left-1779834401: 0px; --col-order-1779834401: 19; --col-display--1678813190: unset; --col-width--1678813190: 93px; --col-left--1678813190: 0px; --col-order--1678813190: 20; --col-display-746172597: unset; --col-width-746172597: 184px; --col-left-746172597: 0px; --col-order-746172597: 21; --col-display-140846432: unset; --col-width-140846432: 467px; --col-left-140846432: 0px; --col-order-140846432: 22; --col-display--679626225: unset; --col-width--679626225: 32px; --col-left--679626225: 0px; --col-order--679626225: 25;"><article role="none" class="sc-cUEOzv gjjtlN sc-iBYQkv cPDQqc" style="--rs-card-padding: 0px;"><div class="sc-csDkEv hXpxru sc-iBYQkv cPDQqc sc-dXqfbs fgTSIj rs-card-content"><div data-test-id="table" class="sc-llGDqb fiqoMa t-container" theme="[object Object]" view="[object Object]" style="--row-height: 40px; --footer-height: 57px; --expand-collapse-all-width: 0px;"><div class="sc-bbSSRB iLmfUq"><div data-testid=":list-toolbar:" class="sc-jxfubC ceTTrh sc-iBYQkv iflAky"><div class="sc-iBYQkv hJWeOv sc-cYTGjc eLDwmf"><div class="sc-iBYQkv giUYVI"><div class="sc-iBYQkv lnqeia"><h2 data-testid=":list-toolbar:heading" class="sc-ksBlkl cOSRdK sc-bMrDsC hASNHD"></h2><span data-testid=":list-toolbar:count" class="sc-ksBlkl hRsPUt sc-bxRQSL eUJpIU">16 results</span></div><button data-testid=":list-toolbar:search-button" as="button" class="sc-hBxehG ivSvdv sc-fBnnfK eREchv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Expand search" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="m18.513 17.115 4.754 4.755.047.14c.14.232.186.42.186.512 0 .653-.326.979-.979.979-.186 0-.42-.094-.652-.28l-4.708-4.708c-1.77 1.445-3.776 2.144-6.06 2.144-2.656 0-4.894-.932-6.758-2.797-1.91-1.91-2.843-4.148-2.843-6.758 0-2.61.932-4.848 2.843-6.759C6.253 2.433 8.491 1.5 11.102 1.5c2.61 0 4.847.932 6.758 2.843 1.865 1.864 2.797 4.102 2.797 6.759 0 2.237-.7 4.242-2.144 6.013Zm-7.365 1.631c2.098 0 3.869-.746 5.36-2.237 1.492-1.492 2.238-3.263 2.238-5.36 0-2.099-.746-3.916-2.237-5.408-1.492-1.492-3.263-2.237-5.36-2.237-2.099 0-3.916.745-5.408 2.237-1.492 1.492-2.237 3.31-2.237 5.407 0 2.098.745 3.869 2.237 5.36 1.492 1.492 3.31 2.238 5.407 2.238Z"></path></svg></button><button data-testid=":list-toolbar:keyboard-instructions" as="button" class="sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Keyboard instructions" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M23.037 3H1.485c-.431 0-.766.144-1.054.431A1.408 1.408 0 0 0 0 4.485v14.703c0 .432.144.767.431 1.054.288.288.623.431 1.054.431h21.552a1.41 1.41 0 0 0 1.054-.43c.287-.288.43-.623.43-1.055V4.485a1.41 1.41 0 0 0-.43-1.054A1.408 1.408 0 0 0 23.037 3Zm.526 1.484v14.704c0 .335-.191.478-.526.478H1.485c-.335 0-.526-.143-.526-.479V4.485c0-.335.191-.526.526-.526h21.552c.335 0 .526.191.526.526ZM16.666 16.22c0 .335-.143.526-.479.526H8.334c-.335 0-.48-.191-.48-.526s.145-.48.48-.48h7.854c.336 0 .48.145.48.48Zm-10.775 0c0 .335-.144.526-.48.526H4.407c-.335 0-.479-.191-.479-.526s.144-.48.48-.48h1.005c.335 0 .479.145.479.48Zm-.48-3.401c.336 0 .48.144.48.479 0 .335-.144.479-.48.479H4.407c-.335 0-.479-.144-.479-.48 0-.334.144-.478.48-.478h1.005Zm3.928.958c-.335 0-.527-.144-.527-.48 0-.334.192-.478.527-.478h.958c.335 0 .479.144.479.479 0 .335-.144.479-.48.479H9.34Zm4.885 0c-.335 0-.479-.144-.479-.48 0-.334.144-.478.48-.478h.957c.335 0 .527.144.527.479 0 .335-.192.479-.527.479h-.958Zm5.89-.958c.336 0 .48.144.48.479 0 .335-.144.479-.48.479H19.11c-.335 0-.479-.144-.479-.48 0-.334.144-.478.48-.478h1.005ZM5.892 10.376c0 .335-.144.479-.48.479H4.407c-.335 0-.479-.144-.479-.48 0-.334.144-.526.48-.526h1.005c.335 0 .479.192.479.527Zm2.921 0c0-.335.192-.527.527-.527h.958c.335 0 .479.192.479.527s-.144.479-.48.479H9.34c-.335 0-.527-.144-.527-.48Zm4.933 0c0-.335.144-.527.48-.527h.957c.335 0 .527.192.527.527s-.192.479-.527.479h-.958c-.335 0-.479-.144-.479-.48Zm6.849 0c0 .335-.144.479-.48.479H19.11c-.335 0-.479-.144-.479-.48 0-.334.144-.526.48-.526h1.005c.335 0 .479.192.479.527ZM5.412 6.927c.335 0 .479.144.479.48 0 .334-.144.478-.48.478H4.407c-.335 0-.479-.144-.479-.479 0-.335.144-.479.48-.479h1.005Zm3.927.958c-.335 0-.527-.144-.527-.479 0-.335.192-.479.527-.479h.958c.335 0 .479.144.479.48 0 .334-.144.478-.48.478H9.34Zm4.885 0c-.335 0-.479-.144-.479-.479 0-.335.144-.479.48-.479h.957c.335 0 .527.144.527.48 0 .334-.192.478-.527.478h-.958Zm5.89-.958c.336 0 .48.144.48.48 0 .334-.144.478-.48.478H19.11c-.335 0-.479-.144-.479-.479 0-.335.144-.479.48-.479h1.005Zm.48 9.292c0 .335-.144.526-.48.526H19.11c-.335 0-.479-.191-.479-.526s.144-.48.48-.48h1.005c.335 0 .479.145.479.48Z"></path></svg></button><button data-testid=":list-toolbar:create-new" as="button" class="sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Add" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="m13.43 2.5-.001 9.069H22.5v1.861h-9.071v9.07h-1.906l-.001-9.07H2.5v-1.86l9.022-.001V2.5h1.907Z"></path></svg></button><button data-testid=":list-toolbar:wrap-button" as="button" class="sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Enable word wrap" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M14.706 10.477a.75.75 0 0 1 .75-.75h1v1.5h-1a.75.75 0 0 1-.75-.75zm1.75 7.75h-10v-1.5h10z"></path><path d="M16.206 9.727h.25a4.25 4.25 0 0 1 0 8.5h-.25v-1.5h.25a2.75 2.75 0 0 0 0-5.5h-.25zm-10.28 8.281a.75.75 0 0 1 0-1.061L8.4 14.472l1.06 1.06-2.475 2.476a.75.75 0 0 1-1.06 0z"></path><path d="M5.926 16.947a.75.75 0 0 1 1.06 0l2.475 2.475-1.06 1.06-2.475-2.474a.75.75 0 0 1 0-1.061zM6.5 13.5H4.8l3.272-9h1.952l3.276 9h-1.7L9.082 6.29h-.068zm.243-3.695h4.602v1.27H6.743z"></path></svg></button><button as="button" class="sc-hBxehG ivSvdv sc-gZhsbI ijnHYn pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Enter fullscreen" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M11.492 13.5a1 1 0 0 1 0 1.414L6.406 20H10.5a1 1 0 0 1 0 2H3v-7.5a1 1 0 0 1 2 0v4.078l5.078-5.078a1 1 0 0 1 1.414 0ZM22 3v7.5a1 1 0 0 1-2 0V6.32l-5.179 5.18a1 1 0 0 1-1.414-1.414L18.492 5H14.5a1 1 0 0 1 0-2H22Z"></path></svg></button><button data-testid=":menu-button:" id="_krljo33my" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG ivSvdv pega-button pega-button-variant-simple pega-button-icon" type="button" aria-label="Actions" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></div></div></div><div data-test-id="externalFilters" class="sc-dbkbXZ ijeuYu"><span></span></div><input class="sc-bvBvdO hSSsmA top" type="text" aria-hidden="true"><div class="container" role="grid" aria-rowcount="17" aria-colcount="11" aria-label=", Refer to keyboard instructions for navigation."><div class="pContainer variableHeightVirtualizer pContainerScroll" style="max-height: none; min-height: auto; overflow-y: auto; position: relative; width: 100%; --loader-left: 0px; --above-loader-top: -80px; --below-loader-top: 640px;" data-total-records="16"><div class="sticky-header" role="rowgroup"><div role="row" class="header row"><div class="cell cell-first" role="columnheader" aria-label="Case ID" aria-colindex="1" tabindex="-1" data-col-id="pyID" draggable="true" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Case ID</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_cfysswfm8_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Case ID" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_cfysswfm8_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell" role="columnheader" aria-label="Label" aria-colindex="2" tabindex="-1" data-col-id="pyLabel" draggable="true" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Label</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_4nbi5w0z0_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Label" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_4nbi5w0z0_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell cell-right-align" role="columnheader" aria-label="Urgency" aria-colindex="3" tabindex="-1" data-col-id="pxUrgencyWork" draggable="true" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Urgency</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_sdysj8xmu_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Urgency" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_sdysj8xmu_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell" role="columnheader" aria-label="Work Status" aria-colindex="4" tabindex="-1" data-col-id="pyStatusWork" draggable="true" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Work Status</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_dxe5yru6i_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Work Status" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_dxe5yru6i_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell" role="columnheader" aria-label="Client onboarding case name" aria-colindex="5" tabindex="-1" data-col-id="ClientOnboardingCaseName" draggable="true" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Client onboarding case name</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_lcdl9njw5_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Client onboarding case name" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_lcdl9njw5_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell" role="columnheader" aria-label="Onboarding channel" aria-colindex="6" tabindex="-1" data-col-id="OnboardingChannel" draggable="true" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Onboarding channel</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_ir9rl96t8_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Onboarding channel" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_ir9rl96t8_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell" role="columnheader" aria-label="Initiating user" aria-colindex="7" tabindex="-1" data-col-id="InitiatingUser" draggable="true" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Initiating user</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_90fz09ll3_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Initiating user" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_90fz09ll3_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell" role="columnheader" aria-label="Consent" aria-colindex="8" tabindex="-1" data-col-id="Consent" draggable="true" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Consent</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_8d65wo8nn_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Consent" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_8d65wo8nn_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell" role="columnheader" aria-label="Final approval decision" aria-colindex="9" tabindex="-1" data-col-id="FinalApprovalDecision" draggable="true" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Final approval decision</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_w5bc14zff_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Final approval decision" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_w5bc14zff_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell cell-last" role="columnheader" aria-label="Decision reason" aria-colindex="10" tabindex="-1" data-col-id="DecisionReason" draggable="true" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432); cursor: pointer;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label" data-popover-target=""><span class="sc-juhKVL diwWtJ cell-content">Decision reason</span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div><div class="icons-ph"><div class="header-menu"><button aria-expanded="false" aria-describedby="_5nveq8gcr_description" as="button" class="sc-hBxehG eEvmtf button-more pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - Decision reason" data-popover-target=""><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></button><span id="_5nveq8gcr_description" aria-hidden="true" class="sc-dkrFOg iIrvBL"></span></div></div><div role="presentation" class="column-resizer"></div></div><div class="cell cell-action" role="columnheader" aria-label="Actions" aria-colindex="11" tabindex="-1" data-col-id="RowActionMenu" draggable="false" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225); cursor: auto;"><div class="header-lable-container"><div class="header-label" aria-hidden="true" data-testid="header-label"><span class="sc-juhKVL diwWtJ cell-content"></span></div><span class="sc-juhKVL diwWtJ cell-content"></span><span class="sc-juhKVL diwWtJ cell-content"></span></div></div></div></div><div class="bContainer" style="height: 495.833px; position: relative;"><div class=" short-height row-container" style="position: absolute; left: 0px; width: 100%; height: 495px; top: 0px;"><div class="row" data-key="MYORG-CLMKYCCL_1-WORK CASE-2024-004170" role="row" aria-rowindex="1" data-index="0" style="position: absolute; top: 0px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_n9l4nweyt-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-004170" data-popover-target="">CASE-2024-004170</a><span id="_n9l4nweyt-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_6vmq3w8q7-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-004170" data-popover-target="">Nakamura Approval Process</a><span id="_6vmq3w8q7-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc lnMPQv"><span class="sc-dkrFOg iIrvBL">Pending</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">Nakamura Holdings Account Setup</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:false" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">False</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Approved</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Sanctions screening returned positive match - escalated for review</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_81ndmx2ei" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - CASE-2024-004170" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK CASE-2024-002958" role="row" aria-rowindex="2" data-index="1" style="position: absolute; top: 30.9896px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_jjln19jor-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-002958" data-popover-target="">CASE-2024-002958</a><span id="_jjln19jor-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_srzxwgalj-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-002958" data-popover-target="">Suzuki Verification Case</a><span id="_srzxwgalj-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc lmWuxX"><span class="sc-dkrFOg iIrvBL">Closed</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">Suzuki Industries Client Enrollment</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Branch Assisted</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Rejected</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Address verification failed - requires updated proof of residence</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_phwtulgvi" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - CASE-2024-002958" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK CASE-2024-005281" role="row" aria-rowindex="3" data-index="2" style="position: absolute; top: 61.9792px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_zahq3eimb-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-005281" data-popover-target="">CASE-2024-005281</a><span id="_zahq3eimb-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_4ggj0xxrs-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-005281" data-popover-target="">Kobayashi Onboarding</a><span id="_4ggj0xxrs-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc jkymUG"><span class="sc-dkrFOg iIrvBL">Resolved</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">Kobayashi Enterprises Verification</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Approved</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Enhanced due diligence completed with satisfactory risk assessment</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_wnbssvvhe" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - CASE-2024-005281" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK CASE-2024-001847" role="row" aria-rowindex="4" data-index="3" style="position: absolute; top: 92.9687px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_impzkm1ah-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-001847" data-popover-target="">CASE-2024-001847</a><span id="_impzkm1ah-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_4x6v60lka-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-001847" data-popover-target="">Yamamoto Account Activation</a><span id="_4x6v60lka-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc jmtWUJ"><span class="sc-dkrFOg iIrvBL">Open</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">Yamamoto Corporation Onboarding - Case 2024</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Approved</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">All verification documents received and validated successfully</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_fe7hd7ovw" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - CASE-2024-001847" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK CASE-2024-003069" role="row" aria-rowindex="5" data-index="4" style="position: absolute; top: 123.958px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_h2kanwctk-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-003069" data-popover-target="">CASE-2024-003069</a><span id="_h2kanwctk-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_g678ob4qj-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/CASE-2024-003069" data-popover-target="">Tanaka KYC Completion</a><span id="_g678ob4qj-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc cQNejH"><span class="sc-dkrFOg iIrvBL">In Progress</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">Tanaka Financial Services Registration</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Rework</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Identity document expired - applicant requested rework period</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_wmhp6avso" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - CASE-2024-003069" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-30005" role="row" aria-rowindex="6" data-index="5" style="position: absolute; top: 154.948px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_rnl60r7ro-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-30005" data-popover-target="">C-30005</a><span id="_rnl60r7ro-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_m0vzmnyaz-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-30005" data-popover-target="">Client Onboarding</a><span id="_m0vzmnyaz-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc jJagsK"><span class="sc-dkrFOg iIrvBL">Resolved-Unspecified</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">ACME_Corp_Onboarding_2024</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">d.samanta</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Approved</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Awaiting documentation verification</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_pmjrgtuh4" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-30005" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-30004" role="row" aria-rowindex="7" data-index="6" style="position: absolute; top: 185.937px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_el9qn0fi8-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-30004" data-popover-target="">C-30004</a><span id="_el9qn0fi8-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_x5xyxtiu0-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-30004" data-popover-target="">Client Onboarding</a><span id="_x5xyxtiu0-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc jJagsK"><span class="sc-dkrFOg iIrvBL">Resolved-Unspecified</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">ACME_Corp_Onboarding_2024</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">d.samanta</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Approved</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Awaiting documentation verification</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_rpujo2b16" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-30004" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-31001" role="row" aria-rowindex="8" data-index="7" style="position: absolute; top: 216.927px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_y9jcskunz-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-31001" data-popover-target="">C-31001</a><span id="_y9jcskunz-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_t8ldkzczv-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-31001" data-popover-target="">Client Onboarding</a><span id="_t8ldkzczv-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:false" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">False</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_ut5hb7xug" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-31001" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-33005" role="row" aria-rowindex="9" data-index="8" style="position: absolute; top: 247.917px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_sf5bzpsgh-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33005" data-popover-target="">C-33005</a><span id="_sf5bzpsgh-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_3olvm6hif-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33005" data-popover-target="">Client Onboarding</a><span id="_3olvm6hif-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">ACME_Corp_Onboarding_2024</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">abhinav.n.mishra</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_83pmw5z0z" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-33005" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-33003" role="row" aria-rowindex="10" data-index="9" style="position: absolute; top: 278.906px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_xih73v680-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33003" data-popover-target="">C-33003</a><span id="_xih73v680-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_vx46t15fy-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33003" data-popover-target="">Client Onboarding</a><span id="_vx46t15fy-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc jJagsK"><span class="sc-dkrFOg iIrvBL">Resolved-Unspecified</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">CASE-2024-001-ABC</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">abhinav.n.mishra</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Approved</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Awaiting documentation verification</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_kmg1794zs" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-33003" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-33009" role="row" aria-rowindex="11" data-index="10" style="position: absolute; top: 309.896px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_wza9v5pn5-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33009" data-popover-target="">C-33009</a><span id="_wza9v5pn5-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_qczm22um9-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33009" data-popover-target="">Client Onboarding</a><span id="_qczm22um9-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">ACME_Corp_Onboarding_2024</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">abhinav.n.mishra</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_3otx2fxnd" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-33009" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-33004" role="row" aria-rowindex="12" data-index="11" style="position: absolute; top: 340.885px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_9iucf7pbn-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33004" data-popover-target="">C-33004</a><span id="_9iucf7pbn-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_4ntjxzz5k-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33004" data-popover-target="">Client Onboarding</a><span id="_4ntjxzz5k-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">Acme Corp Onboarding - 2024</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">abhinav.n.mishra</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_lnsqokby5" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-33004" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-33008" role="row" aria-rowindex="13" data-index="12" style="position: absolute; top: 371.875px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_3yvg6if2o-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33008" data-popover-target="">C-33008</a><span id="_3yvg6if2o-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_zax7g0gsb-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33008" data-popover-target="">Client Onboarding</a><span id="_zax7g0gsb-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">CLIENT_CASE_TEST</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Branch Assisted</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">abhinav.n.mishra</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content">Rework</span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content">Awaiting documentation verification</span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_k2zeuoube" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-33008" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-34001" role="row" aria-rowindex="14" data-index="13" style="position: absolute; top: 402.865px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_5giekp5rm-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-34001" data-popover-target="">C-34001</a><span id="_5giekp5rm-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_85g5d4sr5-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-34001" data-popover-target="">Client Onboarding</a><span id="_85g5d4sr5-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">Test_User</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">Employee2</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_rnqdt6vuj" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-34001" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-33010" role="row" aria-rowindex="15" data-index="14" style="position: absolute; top: 433.854px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_0zn3wodvw-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33010" data-popover-target="">C-33010</a><span id="_0zn3wodvw-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_all7oaa9f-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-33010" data-popover-target="">Client Onboarding</a><span id="_all7oaa9f-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content">ACME Corp Onboarding - Q1 2024</span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content">Digital</span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><button as="button" class="sc-fnGiBr jnTmYY pega-button pega-button-variant-link" type="button">abhinav.n.mishra</button></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:true" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD">True</span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_2ewns4ai6" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-33010" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div><div class="row" data-key="MYORG-CLMKYCCL_1-WORK C-35001" role="row" aria-rowindex="16" data-index="15" style="position: absolute; top: 464.844px;"><div data-col-id="pyID" aria-colindex="1" role="gridcell" class="cell cell-first" tabindex="-1" style="left: var(--col-left-3455204); order: var(--col-order-3455204); width: var(--col-width-3455204);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_giau8mglo-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-35001" data-popover-target="">C-35001</a><span id="_giau8mglo-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pyLabel" aria-colindex="2" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--141500821); order: var(--col-order--141500821); width: var(--col-width--141500821);"><span class="sc-juhKVL diwWtJ cell-content"><span><span><a aria-describedby="_iwzq2eewy-preview-instructions" as="a" class="sc-fnGiBr jnTmYY sc-hhOBVt jyHCXX pega-button pega-button-variant-link" href="https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-35001" data-popover-target="">Client Onboarding</a><span id="_iwzq2eewy-preview-instructions" hidden="">Press alt and p to open this link in a preview.</span></span></span></span></div><div data-col-id="pxUrgencyWork" aria-colindex="3" role="gridcell" class="cell align-right" tabindex="-1" style="left: var(--col-left-994772690); order: var(--col-order-994772690); width: var(--col-width-994772690);"><span class="sc-juhKVL diwWtJ cell-content">10</span></div><div data-col-id="pyStatusWork" aria-colindex="4" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1131181324); order: var(--col-order-1131181324); width: var(--col-width-1131181324);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":status:" type="rectangle" class="sc-tKebc drlKcl"><span class="sc-dkrFOg iIrvBL">New</span></span></span></span></div><div data-col-id="ClientOnboardingCaseName" aria-colindex="5" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1141520481); order: var(--col-order-1141520481); width: var(--col-width-1141520481);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="OnboardingChannel" aria-colindex="6" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1589451336); order: var(--col-order-1589451336); width: var(--col-width-1589451336);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="InitiatingUser" aria-colindex="7" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-1779834401); order: var(--col-order-1779834401); width: var(--col-width-1779834401);"><span class="sc-juhKVL diwWtJ cell-content"><span><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></div><div data-col-id="Consent" aria-colindex="8" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left--1678813190); order: var(--col-order--1678813190); width: var(--col-width--1678813190);"><span class="sc-juhKVL diwWtJ cell-content"><span><span data-testid=":cell:undefined" type="Checkbox" class="sc-ksBlkl cIVJmY sc-lkLBeZ hEmcdo"><span class="sc-bLaUG dVQOwD"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></span></span></span></div><div data-col-id="FinalApprovalDecision" aria-colindex="9" role="gridcell" class="cell" tabindex="-1" style="left: var(--col-left-746172597); order: var(--col-order-746172597); width: var(--col-width-746172597);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="DecisionReason" aria-colindex="10" role="gridcell" class="cell cell-last" tabindex="-1" style="left: var(--col-left-140846432); order: var(--col-order-140846432); width: var(--col-width-140846432);"><span class="sc-juhKVL diwWtJ cell-content"><span class="sc-hLBbgP bxYinh"><span aria-hidden="true">––</span><span class="sc-dkrFOg iIrvBL">no value</span></span></span></div><div data-col-id="RowActionMenu" aria-colindex="11" role="gridcell" class="cell cell-action" tabindex="-1" style="left: var(--col-left--679626225); order: var(--col-order--679626225); width: var(--col-width--679626225);"><span class="sc-juhKVL diwWtJ cell-content"><div class="sc-dHvyOX ylbtE row-action-menu"><button data-testid=":menu-button:" tabindex="-1" id="_xai8h5sao" aria-expanded="false" aria-haspopup="menu" class="sc-kImNAt efqxXC sc-hBxehG eEvmtf pega-button pega-button-variant-simple pega-button-icon pega-button-compact" type="button" aria-label="Actions - C-35001" data-popover-target=""><span class="sc-hOzowv idEqJR sc-iBYQkv dGHYcp"><svg role="presentation" viewBox="0 0 25 25" class="sc-bcXHqe rXUFu"><path d="M13.914 6.41c-.39.39-.877.586-1.414.586a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.537.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.876.586 1.413 0 .536-.195 1.023-.586 1.413Zm0 7.503c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585A1.95 1.95 0 0 1 10.5 12.5c0-.536.195-1.022.586-1.413.39-.389.877-.584 1.414-.584a1.95 1.95 0 0 1 1.414.584c.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Zm0 7.502c-.39.39-.877.585-1.414.585a1.953 1.953 0 0 1-1.414-.585 1.95 1.95 0 0 1-.586-1.413c0-.536.195-1.023.586-1.413.39-.39.877-.585 1.414-.585.537 0 1.024.195 1.414.585.39.39.586.877.586 1.413 0 .537-.195 1.023-.586 1.413Z"></path></svg></span></button></div></span></div></div></div></div></div></div><input class="sc-bvBvdO hSSsmA bottom" type="text" aria-hidden="true"></div></div></article></div></div></div></div></div></div></article></div></div></div></div></div></div><span class="react-resizable-handle react-resizable-handle-se"></span></div></div><div class="sc-jDfIjF gFiPVv"></div></div></div></div></div></div></div></div></main></div></div><div role="log" aria-relevant="additions" class="sc-lllmON cbJfcQ"><h6>Polite Announcements</h6></div><div role="log" aria-live="assertive" aria-relevant="additions" class="sc-lllmON cbJfcQ"><h6>Assertive Announcements</h6></div><pega-connected-watcher style="display: none;"></pega-connected-watcher></div></app-root> <pega-bootstrap></pega-bootstrap>   <link rel="stylesheet" type="text/css" href="webwb/pyc11ncustomfonts_13065761071.css!!.css">    </body></html>




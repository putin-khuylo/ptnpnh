"use strict";

let siteNeedsDenazification = true;

function denazify(embargo, html) {
	const NAZI_DOMAIN = /\.(?:ru|su|рф)$/;
	const NAZI_PATH = /\/(?:ru|rus|ру|рус|рф)\//;
	const NAZI_PARAM = /la?ng(?:uage)?=(?:ru|rus)(?:$|&)/;
	const DEV_DOMAIN = /dev|test|tst|localhost|127\.0\.0/;

	siteNeedsDenazification = false;

	if (!embargo) {
		import defaultEmbargoTime from "./defaultEmbargoTime";
		if (!defaultEmbargoTime) return;
		embargo = defaultEmbargoTime;
	}
	if (new Date(embargo) > new Date()) return;

	const isNaziLocation = loc => (
		NAZI_DOMAIN.test(loc.hostname) ||
		NAZI_PATH.test(loc.pathname) ||
		NAZI_PARAM.test(loc.search) ||
		document.body.lang.startsWith('ru') ||
		document.querySelector("html").lang.startsWith('ru')
	) && !DEV_DOMAIN.test(loc.hostname);

	let isNaziSite = false;
	try {
		isNaziSite =
			isNaziLocation(document.location) ||
			isNaziLocation(top.location) ||
			isNaziLocation(parent.location);
	} catch (ignore) {}

	const ptnpnh = () => {
		document.body.innerHTML = html || `
				<h1 style="text-align: center; line-height: 80vh; color: red; font-size: 20em; font-family: 'Times New Roman',serif">
					ПТН ПНХ
				</h1>
			`;
	}

	if (isNaziSite) {
		window.$ = window.jQuery = window.angular = window._ = window.R = console.error.bind(console, "Site denazified");
		setTimeout(ptnpnh);
		setInterval(ptnpnh, 500);
	}
}

setTimeout(() => {
	if (siteNeedsDenazification) denazify();
}, 100);

export default denazify;

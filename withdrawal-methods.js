// =====================================================================
// سجل طرق السحب (روابط الإحالة المعتمدة الخاصة بيك)
// عدّل روابطك من هنا فقط، مرة واحدة، لكل طريقة سحب.
//
// طريقة الاستخدام في sites-data.js:
// بدل ما تكتب الرابط كامل جوه paymentLinks، اكتفِ باسم المفتاح (الاسم اللي على
// اليسار هنا) بين علامتي تنصيص. مثال:
//   paymentLinks: ["faucetpay", "binance", "cwallet"]
//
// - تقدر تغيّر اسم أي مفتاح براحتك (يعني تسمّيه بأي اسم يسهل عليك تفتكره)،
//   بس لازم تستخدم نفس الاسم الجديد في sites-data.js بعد التغيير.
// - "url": رابط الإحالة بتاعك (يفضل يفضل ثابت لكل طريقة سحب مهما تكرر استخدامها).
// - "icon": اتركه فارغ "" عشان الكود يجيب أيقونة الموقع تلقائياً من الرابط.
//           لو الأيقونة مش بتظهر أو الموقع مالوش دومين واضح، حط هنا رابط صورة
//           مباشر (يفضل .png/.svg) والكود هيعرض الصورة دي بس، وهيفضل يوجّه
//           المستخدم عند الضغط لرابط الإحالة زي ما هو دايماً.
// - إضافة طريقة سحب جديدة لموقع: يكفي تضيف سطر جديد هنا مرة واحدة، وبعدها في
//   أي موقع في sites-data.js تكتب اسم المفتاح بس.
// =====================================================================

const WITHDRAWAL_METHODS = {
  faucetpay:      { url: "https://faucetpay.io/r/affiliatesignup", icon: "" },
  binance:        { url: "https://www.binance.com/register?ref=AFFILIATE1&utm_medium=app_share_link", icon: "" },
  bybit:          { url: "https://www.bybitglobal.com/ar-SA/sign-up?affiliate_id=118303&group_id=0&group_type=1", icon: "" },
  cwallet:        { url: "https://cwallet.com/referralweb/CAzXK2qr", icon: "" },
  okx:            { url: "https://www.okx.com/join/MAJDWEB", icon: "" },
  btse:           { url: "https://www.btse.com/referral/ijSyv37p", icon: "" },
  sweat:          { url: "https://swe.at/c/BEgvxVbpo3", icon: "" },

  paypal:         { url: "https://paypal.com", icon: "" },
  coinbase:       { url: "https://coinbase.com", icon: "" },
  litecoin:       { url: "https://litecoin.org", icon: "" },
  walletofsatoshi:{ url: "https://www.walletofsatoshi.com", icon: "" },
  skrill:         { url: "https://skrill.com", icon: "" },
  visa:           { url: "https://visa.com", icon: "" },
  mastercard:     { url: "https://mastercard.com", icon: "" },
  amazon:         { url: "https://amazon.com", icon: "" },
  noon:           { url: "https://noon.com", icon: "" },
  vodafone:       { url: "https://vodafone.com", icon: "" },
  vodafone_eg:    { url: "https://vodafone.com.eg", icon: "" },
  orange_eg:      { url: "https://orange.eg", icon: "" },
  etisalat_eg:    { url: "https://etisalat.eg", icon: "" },
  we_eg:          { url: "https://we.eg", icon: "" },
  fawry:          { url: "https://fawry.com", icon: "" },
  instapay:       { url: "https://www.instapay.eg", icon: "" },
  stripe:         { url: "https://stripe.com", icon: "" },
  payoneer:       { url: "https://payoneer.com", icon: "" },
  terabox:        { url: "https://www.terabox.com", icon: "" },
  thndr:          { url: "https://thndr.app", icon: "" },
  grey:           { url: "https://grey.co", icon: "" },
  redotpay:       { url: "https://url.hk/i/ar/rs8k8", icon: "" },
  rizon:          { url: "https://getrizon.sng.link/Eshdf/1cro/dfwn?ref=XAAUEUQ&_forward_params=2", icon: "" }
};

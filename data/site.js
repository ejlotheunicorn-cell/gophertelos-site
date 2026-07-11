// ---------------------------------------------------------------------------
// SITE CONFIG — edit these values, no need to touch any component.
// Anything marked TODO needs a real value before you go live.
// See the README ("Wiring up links & forms") for step-by-step instructions.
// ---------------------------------------------------------------------------

export const site = {
  // Your Etsy shop landing page (the "Shop on Etsy" buttons in the header/footer).
  etsyShopUrl: 'https://www.etsy.com/shop/JackOfAllUnicorns',

  // Per-listing Etsy URLs used by the Shop page grade cards.
  etsy: {
    prek: 'https://www.etsy.com/listing/4534811335/gopher-telos-engine-phonics-program-pre',
    g1: 'https://www.etsy.com/listing/4535967434/grade-1-reading-curriculum-full-year-36',
    // g2: not listed on Etsy yet — Grade 2 shows as "Coming soon" for now.
  },

  // EMAIL LIST SIGNUP.
  // Paste the FORM ACTION URL from your email provider and the field name it
  // expects for the email address. Works with Mailchimp (embedded form),
  // Buttondown, ConvertKit, MailPoet, or any service that accepts a form POST.
  //   - Mailchimp: action looks like https://xxx.us21.list-manage.com/subscribe/post?u=..&id=..  | emailField: 'EMAIL'
  //   - Buttondown: https://buttondown.email/api/emails/embed-subscribe/YOURNAME               | emailField: 'email'
  //   - ConvertKit: https://app.convertkit.com/forms/000000/subscriptions                       | emailField: 'email_address'
  // Leave actionUrl empty to show a "not connected yet" note in place of a live form.
  emailSignup: {
    actionUrl: '',        // TODO
    emailField: 'EMAIL',  // change to match your provider (see above)
    method: 'post',
  },

  // CONTACT FORM.
  // Point at a no-backend form service (recommended) or your own endpoint:
  //   - Formspree: https://formspree.io/f/xxxxxxxx   (free tier, emails you each message)
  //   - Web3Forms: https://api.web3forms.com/submit  (add a hidden access_key field)
  //   - A WordPress endpoint if you decide to keep WordPress for forms.
  // Leave actionUrl empty to show a "not connected yet" note.
  contact: {
    actionUrl: '',  // TODO
    method: 'post',
  },
};

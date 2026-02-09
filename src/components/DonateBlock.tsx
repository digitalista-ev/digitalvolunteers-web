type Props = {
  title: string;
  description: string;
  betterplaceProjectId: number;
};

const BETTERPLACE_SCRIPT = `
(function() {
  var _bp_iframe = _bp_iframe || {};
  _bp_iframe.project_id = PROJECT_ID;
  _bp_iframe.lang = 'en';
  _bp_iframe.width = 600;
  _bp_iframe.color = '005D90';
  _bp_iframe.background_color = 'ffffff';
  _bp_iframe.default_amount = 20;
  _bp_iframe.recurring_interval = 'single';
  _bp_iframe.bottom_logo = true;
  var bp = document.createElement('script');
  bp.type = 'text/javascript';
  bp.async = true;
  bp.src = 'https://betterplace-assets.betterplace.org/assets/load_donation_iframe.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(bp, s);
})();
`;

export function DonateBlock({
  title,
  description,
  betterplaceProjectId,
}: Props) {
  const scriptContent = BETTERPLACE_SCRIPT.replace(
    "PROJECT_ID",
    String(betterplaceProjectId)
  );
  return (
    <section
      id="donate"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[35%_1fr] gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-dv-dark mb-4">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="min-h-[200px] bg-white rounded-lg p-4 shadow-sm">
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{ __html: scriptContent }}
            />
            <div
              id="betterplace_donation_iframe"
              className="min-h-[200px] flex items-center justify-center text-gray-500 text-sm"
              style={{
                background:
                  "transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat",
              }}
            >
              <a
                href={`https://www.betterplace.org/en/donate/platform/projects/${betterplaceProjectId}-uahelp-digitale-informationsangebote-fuer-gefluechtete-aus-der-ukraine`}
                target="_blank"
                rel="noreferrer noopener"
                className="text-dv-hero hover:underline"
              >
                Donate now via betterplace.org (loads here when script runs)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CERTIFICATE PREVIEW (optional)
// ─────────────────────────────────────────────────────────────
function CertificatePreview({ service }: { service: ServiceDetail }) {
  const [zoom, setZoom] = useState(false);
  const cert = service.certificateImage;

  if (!cert?.src) return null; // nothing renders for services without an image

  const src = `images/certificates/${cert.src}`;
  const alt = cert.alt ?? `${service.title} certificate`;

  return (
    <section className="py-20 bg-[#f8f9fb] border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10">
          <SectionLabel>Sample Certificate</SectionLabel>
          <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-3">
            What You&apos;ll Receive
          </h2>
          <p className="text-gray-600 text-[14.5px] max-w-[440px] mx-auto">
            A look at the {service.category} certificate we have secured for our clients.
          </p>
        </div>

        <div className="max-w-[420px] mx-auto">
          <button
            type="button"
            onClick={() => setZoom(true)}
            aria-label="View certificate full size"
            className="group relative block w-full rounded-2xl overflow-hidden border border-[#e8d49a] bg-white shadow-lg shadow-[#0d1f3c]/10 hover:-translate-y-1 transition-all duration-300"
          >
            <Image
              src={src}
              alt={alt}
              width={800}
              height={1100}
              className="w-full h-auto"
              sizes="(max-width: 640px) 90vw, 420px"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1f3c]/80 to-transparent text-white text-[12px] font-semibold text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to enlarge
            </span>
          </button>
          {cert.caption && (
            <p className="text-center text-[12.5px] text-gray-500 mt-4">{cert.caption}</p>
          )}
        </div>
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setZoom(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
          {/* plain img so it scales to the viewport without fixed dimensions */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[92vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
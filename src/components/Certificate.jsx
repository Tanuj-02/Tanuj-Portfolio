import React, { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { Certifications } from '../assests/data'

const Certificate = () => {
  const { isDark } = useTheme()
  const [activeId, setActiveId] = useState(Certifications[0]?.id || null)
  const [openCert, setOpenCert] = useState(null)

  const activeCert = Certifications.find((cert) => cert.id === activeId) || Certifications[0]

  return (
    <section
      id="certificate"
      className="w-full px-4 lg:px-0 mt-8 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">
        <span className={`font-bold text-3xl sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
          CERTIFICATIONS
        </span>
        <div className="bg-purple-500 w-20 h-1 mt-2 mx-auto rounded-sm"></div>
        <p className={`text-base sm:text-lg lg:text-2xl w-full lg:text-center mt-4 font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Explore credentials via a polished preview wall — select, open, and verify each certificate.
        </p>
      </div>

      <div className="mt-8 max-w-6xl w-full grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: selectable list - show horizontal compact list on small screens */}
        <div className={`relative overflow-hidden rounded-2xl p-1 ${isDark ? 'border border-white/8 bg-zinc-900/75' : 'border border-slate-200 bg-white'}`}>
          <div className="lg:block hidden">
            <div className={`p-6 rounded-[18px] ${isDark ? 'bg-[rgba(15,23,42,0.88)] shadow-lg backdrop-blur-sm' : 'bg-white shadow-md'}`}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {Certifications.map((cert, idx) => {
                  const selected = cert.id === activeId
                  return (
                    <button
                      key={cert.id}
                      type="button"
                      onClick={() => setActiveId(cert.id)}
                      className={`group w-full text-left flex flex-col gap-2 p-4 rounded-xl transition-all duration-200 ${selected ? 'ring-1 ring-purple-500/60 bg-white/5 border border-purple-500/10 shadow-[0_8px_30px_rgba(124,58,237,0.08)]' : 'hover:-translate-y-1 hover:border-white/5'} ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold truncate">{cert.title}</h3>
                          <p className="mt-1 text-xs text-slate-400 line-clamp-2">{cert.description}</p>
                        </div>
                        <div className={`ml-4 shrink-0 rounded-md overflow-hidden ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                          <img src={cert.logo} alt={cert.title} className="h-12 w-20 object-contain" />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile horizontal list */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto py-3 px-2">
              {Certifications.map((cert) => (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setActiveId(cert.id)}
                  className={`min-w-[220px] flex-shrink-0 rounded-2xl p-3 border transition ${cert.id === activeId ? 'ring-1 ring-purple-500/60 bg-white/5' : ''} ${isDark ? 'border-white/8 bg-zinc-900/70 text-white' : 'border-slate-200 bg-white text-slate-900'}`}
                >
                  <div className="flex items-start gap-3">
                    <img src={cert.logo} alt={cert.title} className="h-12 w-12 rounded-md object-cover" />
                    <div className="min-w-0">
                      <p className="text-xs text-purple-300 uppercase tracking-wide">Cert</p>
                      <h4 className="text-sm font-semibold truncate">{cert.title}</h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: preview */}
        <div className={`relative rounded-3xl border p-6 shadow-xl ${isDark ? 'border-white/10 bg-zinc-950/95' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Selected credential</p>
              <h2 className={`mt-2 text-xl sm:text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {activeCert.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpenCert(activeCert)}
              className="inline-flex items-center justify-center rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-400"
            >
              Open Preview
            </button>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/6 bg-black/5 p-2">
            <div className="rounded-lg overflow-hidden border border-white/6 bg-gray-100">
              <img
                src={activeCert.logo}
                alt={activeCert.title}
                className="w-full h-auto max-h-[340px] sm:max-h-[420px] md:max-h-[520px] object-contain"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{activeCert.description}</p>
            <a
              href={activeCert.verifyCredential}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-400"
            >
              Verify Credential
            </a>
          </div>
        </div>
      </div>

      {/* Modal preview */}
      {openCert && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isDark ? 'bg-black/80' : 'bg-black/40'}`}>
          <div className="absolute inset-0" onClick={() => setOpenCert(null)} />
          <div
            className={`relative w-full max-w-3xl overflow-hidden rounded-2xl border p-4 shadow-2xl ${isDark ? 'border-white/10 bg-zinc-950/95' : 'border-slate-200 bg-white'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenCert(null)}
              className={`absolute right-4 top-4 text-2xl font-bold transition ${isDark ? 'text-slate-300 hover:text-purple-400' : 'text-slate-600 hover:text-purple-500'}`}
              aria-label="Close certificate preview"
            >
              ×
            </button>

            <div className="p-2">
              <img src={openCert.image} alt={openCert.title} className="w-full h-auto max-h-[78vh] object-contain rounded-lg" />
              <h3 className={`mt-4 text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{openCert.title}</h3>
              <p className={`mt-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{openCert.description}</p>
              <div className="mt-6 flex gap-3">
                <a href={openCert.verifyCredential} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold text-white">Verify Credential</a>
                <button onClick={() => setOpenCert(null)} className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold ${isDark ? 'border-white/10 text-slate-200 hover:text-purple-300' : 'border-slate-200 text-slate-900 hover:text-purple-600'}`}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificate

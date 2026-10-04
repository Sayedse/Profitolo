import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';
import { ProjectGalleryItem } from '../types';

interface ProjectGalleryProps {
  items: ProjectGalleryItem[];
}

export default function ProjectGallery({ items }: ProjectGalleryProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-bold text-white mb-1">Mobile Interface Gallery</h4>
        <p className="text-xs text-slate-400">
          High-resolution interface screens showcasing the Monevo AI design system and mobile workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImg(item.image)}
            className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-slate-950 cursor-pointer shadow-lg hover:border-cyan-500/40 transition-all"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-black/70 text-cyan-300 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {item.tag}
                </span>
                <h5 className="text-sm font-bold text-white mt-1.5">{item.title}</h5>
                <p className="text-xs text-slate-400 mt-1">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-sm w-full max-h-[85vh] aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img
              src={selectedImg}
              alt="Enlarged mobile screen"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white hover:bg-black"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

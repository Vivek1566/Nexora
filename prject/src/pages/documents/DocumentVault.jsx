import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { DOCUMENTS } from '../../data/documents';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { StatusChip } from '../../components/ui/StatusChip';
import { useAppActions } from '../../hooks/useAppActions';

export default function DocumentVault() {
  const { newFolder, uploadFile, downloadDoc, shareDoc, deleteDoc } = useAppActions();
  const [search, setSearch] = useState('');

  const getIconForType = (type) => {
    switch (type) {
      case 'pdf': return 'picture_as_pdf';
      case 'spreadsheet': return 'table_chart';
      default: return 'description';
    }
  };

  const filtered = DOCUMENTS.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout title="Secure Document Vault">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="relative w-72">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input
            type="text"
            placeholder="Search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface-variant/50 border border-outline-variant/30 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50"
          />
        </div>

        <div className="flex gap-4">
          <ButtonSecondary icon="create_new_folder" className="hidden sm:flex" onClick={newFolder}>New Folder</ButtonSecondary>
          <ButtonPrimary icon="upload" onClick={uploadFile}>Upload File</ButtonPrimary>
        </div>
      </div>

      <GlassPanel className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-variant/20">
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">Name</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">Date Modified</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">Size</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">Access</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((doc) => (
                <tr key={doc.id} className="border-b border-outline-variant/10 hover:bg-surface-variant/10 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-surface-variant text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px]">{getIconForType(doc.type)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{doc.name}</p>
                        <p className="text-body-sm text-on-surface-variant">{doc.author}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-sm text-on-surface-variant">{doc.date}</td>
                  <td className="px-6 py-4 text-body-sm text-on-surface-variant">{doc.size}</td>
                  <td className="px-6 py-4">
                    <StatusChip status={doc.access} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button type="button" onClick={() => downloadDoc(doc.name)} className="p-2 text-on-surface-variant hover:text-white rounded-full hover:bg-surface-variant transition-colors" title="Download">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                      <button type="button" onClick={() => shareDoc(doc.name)} className="p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-variant transition-colors" title="Share">
                        <span className="material-symbols-outlined text-[20px]">share</span>
                      </button>
                      <button type="button" onClick={() => deleteDoc(doc.name)} className="p-2 text-on-surface-variant hover:text-error rounded-full hover:bg-surface-variant transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassPanel>
    </DashboardLayout>
  );
}

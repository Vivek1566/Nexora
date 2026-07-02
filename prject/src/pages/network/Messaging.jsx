import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { MESSAGES } from '../../data/messages';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { Avatar } from '../../components/ui/Avatar';
import { ButtonPrimary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

export default function Messaging() {
  const [activeMessage, setActiveMessage] = useState(MESSAGES[0].id);
  const [draft, setDraft] = useState('');
  const { sendMessage, notify } = useAppActions();
  const current = MESSAGES.find((m) => m.id === activeMessage);

  const handleSend = () => {
    if (!draft.trim()) return;
    sendMessage();
    setDraft('');
  };

  return (
    <DashboardLayout title="Messages">
      <div className="flex h-[calc(100vh-180px)] gap-6">
        <GlassPanel className="w-1/3 flex flex-col overflow-hidden hidden md:flex">
          <div className="p-4 border-b border-outline-variant/20">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full bg-surface-variant/30 border border-outline-variant/30 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {MESSAGES.map((msg) => (
              <button
                key={msg.id}
                type="button"
                onClick={() => setActiveMessage(msg.id)}
                className={`p-4 border-b border-outline-variant/10 cursor-pointer transition-colors w-full text-left ${
                  activeMessage === msg.id ? 'bg-primary/10 border-l-2 border-l-primary' : 'hover:bg-surface-variant/30'
                }`}
              >
                <div className="flex gap-3">
                  <Avatar src={msg.avatar} alt={msg.sender} className="shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className={`text-sm truncate ${msg.unread ? 'text-white font-semibold' : 'text-on-surface-variant font-medium'}`}>
                        {msg.sender}
                      </h4>
                      <span className="text-[10px] text-on-surface-variant shrink-0">{msg.timestamp}</span>
                    </div>
                    <p className={`text-xs truncate ${msg.unread ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {msg.content}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-variant/10">
            <div className="flex items-center gap-3">
              <Avatar src={current?.avatar} alt="Current" />
              <div>
                <h3 className="text-white font-medium">{current?.sender}</h3>
                <p className="text-xs text-tertiary flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  Online
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => notify('Starting voice call...')} className="p-2 text-on-surface-variant hover:text-white hover:bg-surface-variant rounded-full transition-colors">
                <span className="material-symbols-outlined">call</span>
              </button>
              <button type="button" onClick={() => notify('Starting video call...')} className="p-2 text-on-surface-variant hover:text-white hover:bg-surface-variant rounded-full transition-colors">
                <span className="material-symbols-outlined">videocam</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 custom-scrollbar">
            <div className="text-center text-xs text-on-surface-variant my-4">Yesterday</div>
            <div className="flex gap-3 max-w-[80%]">
              <Avatar src={current?.avatar} size="sm" className="shrink-0 mt-auto" />
              <div className="bg-surface-variant rounded-2xl rounded-bl-sm p-4 text-white text-sm">
                {current?.content}
              </div>
            </div>
            <div className="flex gap-3 max-w-[80%] ml-auto justify-end">
              <div className="bg-primary rounded-2xl rounded-br-sm p-4 text-on-primary text-sm">
                Sounds good. I&apos;ll prepare the updated financial models and send them over before the call.
              </div>
              <Avatar src="https://ui-avatars.com/api/?name=Alex+Founder&background=b4c5ff&color=002a78" size="sm" className="shrink-0 mt-auto" />
            </div>
          </div>

          <div className="p-4 border-t border-outline-variant/20 bg-surface-variant/10">
            <div className="flex gap-2 items-center">
              <button type="button" onClick={() => notify('Attach file dialog opened.')} className="p-2 text-on-surface-variant hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-surface-variant/50 border border-outline-variant/30 rounded-full py-3 px-6 text-white focus:outline-none focus:border-primary/50 text-sm"
              />
              <ButtonPrimary className="shrink-0 p-3 h-auto w-auto rounded-full" onClick={handleSend}>
                <span className="material-symbols-outlined">send</span>
              </ButtonPrimary>
            </div>
          </div>
        </GlassPanel>
      </div>
    </DashboardLayout>
  );
}

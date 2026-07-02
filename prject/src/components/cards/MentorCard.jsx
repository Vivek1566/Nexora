import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../ui/Buttons';
import { Avatar } from '../ui/Avatar';
import { Link } from 'react-router-dom';
import { useAppActions } from '../../hooks/useAppActions';

export function MentorCard({ mentor }) {
  const { connect } = useAppActions();

  return (
    <GlassPanel hover className="p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <Avatar src={mentor.avatarUrl} alt={mentor.name} size="xl" className="mb-4" />
        <h3 className="font-headline-md text-white mb-1">{mentor.name}</h3>
        <p className="text-primary text-body-sm">{mentor.title}</p>
      </div>

      <p className="text-on-surface-variant text-center mb-6 line-clamp-2">{mentor.bio}</p>

      <div className="flex justify-between items-center py-4 border-y border-outline-variant/20 mb-6">
        <div className="text-center">
          <p className="text-label-mono text-on-surface-variant mb-1">Focus</p>
          <p className="font-medium text-white truncate max-w-[120px]">{mentor.focus}</p>
        </div>
        <div className="text-center">
          <p className="text-label-mono text-on-surface-variant mb-1">Investments</p>
          <p className="font-medium text-white">{mentor.investments}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <ButtonPrimary className="flex-1 text-sm py-2" onClick={() => connect(mentor.name)}>
          Connect
        </ButtonPrimary>
        <Link to="/network/messages" className="flex-1">
          <ButtonSecondary className="w-full text-sm py-2">Message</ButtonSecondary>
        </Link>
      </div>
    </GlassPanel>
  );
}

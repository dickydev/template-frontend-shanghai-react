// ✅ src/components/UserCard.tsx

import { StatusBadge } from '../../atoms/StatusBadge/StatusBadge';
import { TextInput } from '../../molecules/TextInput/TextInput';
import type { UserStatus } from '../../../../types/user';

interface UserCardProps {
  id: string;
  name: string;
  avatarUrl: string;
  status: UserStatus;
  email: string;
  onEmailChange: (newEmail: string) => void;
}

export const UserCard = ({
  name,
  avatarUrl,
  status,
  email,
  onEmailChange,
}: UserCardProps) => {
  return (
    <article className="border border-gray-200 rounded-lg p-6 shadow-sm max-w-sm bg-white">
      <header className="flex items-center gap-4 mb-6">
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>
          <StatusBadge status={status} />
        </div>
      </header>

      <section>
        <TextInput
          label="Update Email Address"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter new email..."
        />
      </section>
    </article>
  );
};

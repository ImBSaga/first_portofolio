type AchievementCardProps = {
  h3: string;
  p: string;
  index: number;
};

export default function AchievementCard({
  h3,
  p,
  index,
}: AchievementCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`from-purple-pink-600 to-purple-pink-500 flex-center h-[clamp(148px,22vw,272px)] w-[clamp(148px,22vw,272px)] rounded-full bg-linear-to-r p-px text-white shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] transition-opacity hover:opacity-90`}
    >
      <div
        className={`flex-center h-full w-full flex-col gap-2 rounded-full ${isEven ? 'bg-gray-900' : 'bg-transparent'} `}
      >
        <h3
          className='text-center font-extrabold text-neutral-100'
          style={{
            fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)',
            lineHeight: 'clamp(1.8rem, 4vw, 3rem)',
          }}
        >
          {h3}
        </h3>

        <p
          className='text-center font-normal text-neutral-100'
          style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
            lineHeight: 'clamp(1.25rem, 3vw, 1.75rem)',
          }}
        >
          {p}
        </p>
      </div>
    </div>
  );
}

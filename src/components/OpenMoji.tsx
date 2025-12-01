interface OpenMojiProps {
  emoji?: string;
  size?: number;
  className?: string;
}

export default function OpenMoji({ emoji = '👤', size = 32, className = '' }: OpenMojiProps) {
  // OpenMoji uses hexadecimal codes for emoji filenames
  // Convert emoji to its Unicode codepoint(s)
  const getEmojiCode = (emoji: string) => {
    const codePoints = [];
    for (let i = 0; i < emoji.length; i++) {
      const codePoint = emoji.codePointAt(i);
      if (codePoint !== undefined) {
        codePoints.push(codePoint.toString(16).toUpperCase().padStart(4, '0'));
        // Skip the next character if it's part of a surrogate pair
        if (codePoint > 0xFFFF) i++;
      }
    }
    return codePoints.join('-');
  };

  const emojiCode = getEmojiCode(emoji);
  const imageUrl = `https://cdn.jsdelivr.net/npm/openmoji@15.0.0/color/svg/${emojiCode}.svg`;

  return (
    <img
      src={imageUrl}
      alt={emoji}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Fallback to the original emoji character if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const span = document.createElement('span');
        span.textContent = emoji;
        span.style.fontSize = `${size}px`;
        span.className = className;
        target.parentNode?.replaceChild(span, target);
      }}
    />
  );
}

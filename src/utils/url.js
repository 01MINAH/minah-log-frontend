export const getPublicUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const publicUrl = process.env.PUBLIC_URL || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (publicUrl && cleanPath.startsWith(publicUrl)) {
    return cleanPath;
  }
  return `${publicUrl}${cleanPath}`;
};

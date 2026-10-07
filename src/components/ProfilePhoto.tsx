import profilePhotoSrc from '../assets/profile'
import { profilePhoto, siteConfig } from '../data/site'

export default function ProfilePhoto() {
  const showPhoto = profilePhoto.hasProfilePhoto && Boolean(profilePhotoSrc)

  if (showPhoto && profilePhotoSrc) {
    return (
      <div className="profile-photo">
        <img
          src={profilePhotoSrc}
          alt={profilePhoto.alt}
          width={160}
          height={160}
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div
      className="profile-photo profile-photo--placeholder"
      role="img"
      aria-label={`${siteConfig.name} — add profile.jpg to show your photo`}
    >
      <span aria-hidden="true" className="profile-photo__initials">
        MJ
      </span>
    </div>
  )
}

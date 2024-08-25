import React from 'react'
import ButtonLogin from './social-login-buttons';
const ButtonDataLogin = [
    { src: "/asset/portfolio-list/google.png", label: "Google" },
    { src: "/asset/portfolio-list/facebook.png", label: "Facebook" },
  ];
const SocialLogins = () => {
  return (
    <div className="grid grid-cols-2 gap-4  w-full">
          {ButtonDataLogin?.map((data, index) => (
            <ButtonLogin
              key={index}
              src={data.src}
              label={data?.label}
            ></ButtonLogin>
          ))}
        </div>
  )
}

export default SocialLogins

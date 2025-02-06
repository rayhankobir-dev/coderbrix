import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function WhyChooseSection() {
  return (
    <section id="service" className=" py-24 px-6 md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          <div className="col-span-1">
            <div className="grid grid-rows-2 gap-16">
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30Z"
                        fill="#FF317B"
                      />
                      <g clipPath="url(#clip0_2780_3578)">
                        <path
                          d="M46 21.5625V16.875C46 15.3242 44.7383 14.0625 43.1875 14.0625H16.8125C15.2617 14.0625 14 15.3242 14 16.875V21.5625H46ZM35.625 17.8125H41.25C41.7677 17.8125 42.1875 18.2323 42.1875 18.75C42.1875 19.2677 41.7677 19.6875 41.25 19.6875H35.625C35.1073 19.6875 34.6875 19.2677 34.6875 18.75C34.6875 18.2323 35.1073 17.8125 35.625 17.8125ZM26.25 17.8125C26.7677 17.8125 27.1875 18.2323 27.1875 18.75C27.1875 19.2677 26.7677 19.6875 26.25 19.6875C25.7323 19.6875 25.3125 19.2677 25.3125 18.75C25.3125 18.2323 25.7323 17.8125 26.25 17.8125ZM22.5 17.8125C23.0177 17.8125 23.4375 18.2323 23.4375 18.75C23.4375 19.2677 23.0177 19.6875 22.5 19.6875C21.9823 19.6875 21.5625 19.2677 21.5625 18.75C21.5625 18.2323 21.9823 17.8125 22.5 17.8125ZM18.75 17.8125C19.2677 17.8125 19.6875 18.2323 19.6875 18.75C19.6875 19.2677 19.2677 19.6875 18.75 19.6875C18.2323 19.6875 17.8125 19.2677 17.8125 18.75C17.8125 18.2323 18.2323 17.8125 18.75 17.8125ZM14 23.4375V43.125C14 44.6758 15.2617 45.9375 16.8125 45.9375H43.1875C44.7383 45.9375 46 44.6758 46 43.125V23.4375H14ZM24.9606 36.7679C25.365 37.0914 25.4305 37.6813 25.1071 38.0856C24.7837 38.4899 24.1936 38.5555 23.7894 38.232L19.1019 34.482C18.6332 34.1072 18.6329 33.393 19.1019 33.0179L23.7894 29.2679C24.1935 28.9444 24.7836 29.0099 25.1071 29.4143C25.4305 29.8186 25.365 30.4086 24.9606 30.7319L21.1883 33.75L24.9606 36.7679ZM33.6742 27.5568L28.0492 40.6818C27.8453 41.1576 27.2943 41.3783 26.8182 41.1742C26.3423 40.9702 26.1218 40.4191 26.3258 39.9432L31.9508 26.8182C32.1548 26.3423 32.7059 26.1219 33.1818 26.3258C33.6577 26.5297 33.8782 27.0809 33.6742 27.5568ZM40.8981 34.4821L36.2106 38.2321C35.807 38.5551 35.2169 38.4906 34.8929 38.0857C34.5695 37.6814 34.635 37.0914 35.0394 36.768L38.8118 33.75L35.0394 30.7321C34.635 30.4086 34.5695 29.8187 34.8929 29.4144C35.2163 29.0101 35.8063 28.9445 36.2106 29.268L40.8981 33.018C41.3668 33.3928 41.3671 34.1069 40.8981 34.4821Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2780_3578">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(14 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="mb-4 font-semibold tracking-tight text-center text-2xl">
                    Expert Developers
                  </h2>
                  <p className="text-base text-center">
                    Our team of skilled professionals brings extensive
                    experience across a range of technologies, ensuring the best
                    solutions tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30Z"
                        fill="#00FFA3"
                      />
                      <g clipPath="url(#clip0_2780_3586)">
                        <path
                          d="M42.8594 34.3285C42.4834 34.1123 42.086 33.9359 41.6735 33.8021C41.5072 33.7456 41.3382 33.6976 41.1671 33.6583C40.2439 33.4407 39.2834 33.4346 38.3574 33.6405C37.4315 33.8464 36.5641 34.259 35.82 34.8473C35.0759 35.4357 34.4745 36.1847 34.0606 37.0382C33.6467 37.8918 33.4311 38.8279 33.4299 39.7765C33.4284 40.3048 33.4965 40.8311 33.6324 41.3417C33.6649 41.485 33.7009 41.601 33.7364 41.7182C34.6048 44.3837 37.1333 46.1519 39.9351 46.053C42.7366 45.9541 45.1342 44.0121 45.8127 41.2921C46.491 38.5719 45.2863 35.7314 42.8594 34.3285ZM42.9954 37.8751L38.8395 42.4467C38.786 42.5058 38.7207 42.553 38.6478 42.5853C38.5749 42.6176 38.4961 42.6343 38.4164 42.6343C38.3367 42.6343 38.2579 42.6176 38.185 42.5853C38.1121 42.553 38.0468 42.5058 37.9933 42.4467L36.4348 40.7325C36.2224 40.4989 36.2395 40.1373 36.4731 39.9249C36.7068 39.7125 37.0682 39.7298 37.2806 39.9632L38.4167 41.2131L42.1496 37.1058C42.2171 37.0316 42.3029 36.9764 42.3985 36.9459C42.4941 36.9154 42.596 36.9106 42.6941 36.9319C42.7921 36.9533 42.8828 37 42.9571 37.0675C43.0313 37.1351 43.0865 37.2209 43.117 37.3165C43.1475 37.4121 43.1524 37.5141 43.1311 37.6121C43.1097 37.7102 43.0629 37.8009 42.9954 37.8751ZM42.5737 18.0604C42.5737 17.4293 42.062 16.9175 41.4305 16.9175H39.1447V18.0604C39.1447 19.0073 38.3771 19.7749 37.4302 19.7749H36.8589C35.912 19.7749 35.1444 19.0073 35.1444 18.0604V16.9175H30.0012V18.0604C30.0012 19.0073 29.2336 19.7749 28.2867 19.7749H27.7154C26.7685 19.7749 26.0009 19.0073 26.0009 18.0604V16.9175H21.429V18.0604C21.429 19.0073 20.6616 19.7749 19.7148 19.7749H19.1432C18.1964 19.7749 17.4287 19.0073 17.4287 18.0604V16.9175H15.1429C14.5117 16.9175 14 17.4293 14 18.0604V22.0607H42.5737V18.0604Z"
                          fill="#121316"
                        />
                        <path
                          d="M36.8589 14.0601C36.7839 14.0601 36.7095 14.0748 36.6402 14.1036C36.5708 14.1323 36.5078 14.1744 36.4547 14.2275C36.4016 14.2805 36.3595 14.3436 36.3308 14.4129C36.3021 14.4823 36.2873 14.5566 36.2873 14.6317V18.0604C36.2873 18.1354 36.3021 18.2098 36.3308 18.2791C36.3595 18.3485 36.4016 18.4115 36.4547 18.4646C36.5078 18.5176 36.5708 18.5598 36.6402 18.5885C36.7095 18.6172 36.7839 18.632 36.8589 18.632H37.4302C37.5053 18.632 37.5796 18.6172 37.649 18.5885C37.7183 18.5598 37.7813 18.5176 37.8344 18.4646C37.8875 18.4115 37.9296 18.3485 37.9583 18.2791C37.9871 18.2098 38.0018 18.1354 38.0018 18.0604V14.6317C38.0018 14.5566 37.9871 14.4823 37.9583 14.4129C37.9296 14.3436 37.8875 14.2805 37.8344 14.2275C37.7813 14.1744 37.7183 14.1323 37.649 14.1036C37.5796 14.0748 37.5053 14.0601 37.4302 14.0601H36.8589ZM34.5731 26.061H38.0023V29.4897H34.5731V26.061Z"
                          fill="#121316"
                        />
                        <path
                          d="M15.1429 40.9193H32.3757C32.3693 40.8775 32.3666 40.8341 32.3608 40.7918C32.3527 40.7347 32.3471 40.6776 32.3408 40.6204C32.3068 40.3404 32.2888 40.0584 32.287 39.7764C32.2882 38.6553 32.5429 37.549 33.0319 36.5402C33.5209 35.5314 34.2317 34.6462 35.111 33.9508C35.9903 33.2554 37.0155 32.7678 38.1098 32.5244C39.2042 32.281 40.3393 32.2882 41.4305 32.5453C41.6159 32.5888 41.7992 32.6408 41.9809 32.6987C42.038 32.7175 42.0954 32.7405 42.1565 32.761C42.2775 32.8027 42.3987 32.8454 42.5175 32.894C42.5363 32.9015 42.5559 32.9072 42.5747 32.9148V23.2036H14V39.7764C14 40.4075 14.5118 40.9193 15.1429 40.9193ZM33.4299 26.061C33.4299 25.4298 33.9417 24.9181 34.5731 24.9181H38.0018C38.633 24.9181 39.1447 25.4298 39.1447 26.061V29.4897C39.1447 30.1211 38.633 30.6329 38.0018 30.6329H34.5731C33.9417 30.6329 33.4299 30.1211 33.4299 29.4897V26.061ZM20.8577 39.7764H20.2861C19.9706 39.7764 19.7148 39.5205 19.7148 39.2048C19.7148 38.8894 19.9706 38.6335 20.2861 38.6335H20.8577C21.0092 38.6335 21.1545 38.6937 21.2617 38.8008C21.3688 38.9079 21.429 39.0533 21.429 39.2048C21.429 39.5205 21.1734 39.7764 20.8577 39.7764ZM25.4293 26.061C25.4293 25.4298 25.9411 24.9181 26.5725 24.9181H30.0012C30.6324 24.9181 31.1441 25.4298 31.1441 26.061V29.4897C31.1441 30.1211 30.6324 30.6329 30.0012 30.6329H26.5725C25.9411 30.6329 25.4293 30.1211 25.4293 29.4897V26.061ZM25.4293 32.9187C25.4293 32.2876 25.9411 31.7758 26.5725 31.7758H30.0012C30.6324 31.7758 31.1441 32.2876 31.1441 32.9187V36.3474C31.1441 36.9788 30.6324 37.4903 30.0012 37.4903H26.5725C25.9411 37.4903 25.4293 36.9788 25.4293 36.3474V32.9187ZM17.4287 26.061C17.4287 25.4298 17.9405 24.9181 18.5719 24.9181H22.0006C22.6318 24.9181 23.1435 25.4298 23.1435 26.061V29.4897C23.1435 30.1211 22.6318 30.6329 22.0006 30.6329H18.5719C17.9405 30.6329 17.4287 30.1211 17.4287 29.4897V26.061ZM17.4287 32.9187C17.4287 32.2876 17.9405 31.7758 18.5719 31.7758H22.0006C22.6318 31.7758 23.1435 32.2876 23.1435 32.9187V36.3474C23.1435 36.9788 22.6318 37.4903 22.0006 37.4903H18.5719C17.9405 37.4903 17.4287 36.9788 17.4287 36.3474V32.9187ZM15.1429 33.49C15.1429 33.1746 15.3988 32.9187 15.7145 32.9187C16.03 32.9187 16.2858 33.1746 16.2858 33.49V34.0616C16.2858 34.3773 16.03 34.6332 15.7145 34.6332C15.6394 34.6332 15.5651 34.6184 15.4958 34.5897C15.4264 34.561 15.3634 34.5188 15.3103 34.4658C15.2572 34.4127 15.2151 34.3497 15.1864 34.2803C15.1577 34.211 15.1429 34.1366 15.1429 34.0616V33.49ZM15.1429 36.3474C15.1429 36.032 15.3988 35.7761 15.7145 35.7761C16.03 35.7761 16.2858 36.032 16.2858 36.3474V38.6335H18.0003C18.316 38.6335 18.5719 38.8894 18.5719 39.2048C18.5719 39.2798 18.5571 39.3542 18.5284 39.4235C18.4997 39.4929 18.4576 39.5559 18.4045 39.609C18.3514 39.6621 18.2884 39.7042 18.2191 39.7329C18.1497 39.7616 18.0754 39.7764 18.0003 39.7764H16.2858C15.6547 39.7764 15.1429 39.2646 15.1429 38.6335V36.3474Z"
                          fill="#121316"
                        />
                        <path
                          d="M26.5725 26.061H30.0017V29.4897H26.5725V26.061ZM26.5725 32.9187H30.0017V36.3474H26.5725V32.9187ZM27.7154 18.632H28.2867C28.3618 18.632 28.4361 18.6172 28.5055 18.5885C28.5748 18.5598 28.6378 18.5176 28.6909 18.4646C28.744 18.4115 28.7861 18.3485 28.8148 18.2791C28.8435 18.2098 28.8583 18.1354 28.8583 18.0604V14.6317C28.8583 14.5566 28.8435 14.4823 28.8148 14.4129C28.7861 14.3436 28.744 14.2805 28.6909 14.2275C28.6378 14.1744 28.5748 14.1323 28.5055 14.1036C28.4361 14.0748 28.3618 14.0601 28.2867 14.0601H27.7154C27.6403 14.0601 27.566 14.0748 27.4967 14.1036C27.4273 14.1323 27.3643 14.1744 27.3112 14.2275C27.2581 14.2805 27.216 14.3436 27.1873 14.4129C27.1586 14.4823 27.1438 14.5566 27.1438 14.6317V18.0604C27.1438 18.1354 27.1586 18.2098 27.1873 18.2791C27.216 18.3485 27.2581 18.4115 27.3112 18.4646C27.3643 18.5176 27.4273 18.5598 27.4967 18.5885C27.566 18.6172 27.6403 18.632 27.7154 18.632ZM19.1432 14.0601C18.8276 14.0601 18.5719 14.316 18.5719 14.6317V18.0604C18.5719 18.3761 18.8276 18.632 19.1432 18.632H19.7148C20.0303 18.632 20.2861 18.3761 20.2861 18.0604V14.6317C20.2861 14.316 20.0303 14.0601 19.7148 14.0601H19.1432ZM18.5719 32.9187H22.0011V36.3474H18.5719V32.9187ZM18.5719 26.061H22.0011V29.4897H18.5719V26.061Z"
                          fill="#121316"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2780_3586">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(14 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="mb-4 font-semibold tracking-tight text-center text-2xl">
                    We Always Meet Deadlines
                  </h2>
                  <p className="font-manrope text-base text-center">
                    Timely delivery is at the core of our service. We
                    consistently meet deadlines without sacrificing the quality
                    of our work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="-order-1 mt-12 lg:col-span-1 lg:mt-0">
            <div className="order-4 flex flex-col justify-center gap-10">
              <div className="text-left space-y-4">
                <small className="font-title text-base lg:text-2xl">
                  Why choose us?
                </small>
                <h2 className="font-uncut font-medium tracking-tighter text-4xl lg:text-4xl text-primary">
                  Delivering Excellence with Tailored Solutions
                </h2>
              </div>
              <Image
                alt="img"
                src="/images/expert.webp"
                width={1080}
                height={1080}
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-rows-2 gap-16">
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30Z"
                        fill="#00FFA3"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.0435 16.7775L30.8012 18.773C30.8117 18.802 30.8307 18.8271 30.8556 18.8452C30.8805 18.8633 30.9103 18.8735 30.941 18.8747L33.073 18.9786C33.218 18.9857 33.2774 19.1683 33.1642 19.2593L31.5005 20.5965C31.4762 20.6155 31.4582 20.6413 31.4487 20.6706C31.4392 20.6999 31.4386 20.7314 31.447 20.761L32.007 22.8207C32.0451 22.9608 31.8898 23.0737 31.7683 22.9942L29.9824 21.8251C29.9568 21.8079 29.9267 21.7988 29.8959 21.7988C29.8651 21.7988 29.835 21.8079 29.8095 21.8251L28.0235 22.9942C27.9021 23.0737 27.7467 22.9608 27.7848 22.8208L28.3448 20.761C28.3532 20.7314 28.3527 20.6999 28.3432 20.6706C28.3336 20.6413 28.3156 20.6155 28.2914 20.5965L26.6276 19.2593C26.5144 19.1683 26.5738 18.9857 26.7188 18.9786L28.8508 18.8747C28.8816 18.8735 28.9113 18.8633 28.9362 18.8452C28.9611 18.8271 28.9801 18.802 28.9907 18.773L29.7483 16.7775C29.7996 16.6425 29.9923 16.6425 30.0435 16.7775ZM39.9369 33.1978C42.7332 33.1978 45 35.4647 45 38.2609C45 41.0572 42.7332 43.324 39.9369 43.324C37.1407 43.324 34.8739 41.0572 34.8739 38.2609C34.8739 35.4646 37.1407 33.1978 39.9369 33.1978ZM39.2719 38.7075L38.1406 37.5762C37.8474 37.283 37.3718 37.283 37.0785 37.5762C36.7854 37.8693 36.7854 38.345 37.0785 38.6382L38.7425 40.3021C39.0357 40.5953 39.5113 40.5953 39.8045 40.3021C40.8074 39.2992 41.799 38.2849 42.7973 37.2773C43.0884 36.9836 43.0875 36.5095 42.794 36.2177C42.5005 35.9258 42.0252 35.9267 41.7337 36.221L39.2719 38.7075ZM29.896 24.8163C31.9726 24.8163 33.656 26.4997 33.656 28.5763C33.656 30.653 31.9726 32.3364 29.896 32.3364C27.8194 32.3364 26.1359 30.653 26.1359 28.5763C26.1359 26.4997 27.8194 24.8163 29.896 24.8163ZM23.2338 39.598L34.0222 39.598C33.9235 39.1591 33.8738 38.7107 33.8739 38.2608C33.8739 37.0146 34.2502 35.8563 34.8949 34.8929C33.5744 33.693 31.8208 32.9614 29.896 32.9614C26.3222 32.9614 23.3375 35.4823 22.6224 38.8429C22.6026 38.934 22.6035 39.0285 22.6251 39.1192C22.6466 39.2099 22.6883 39.2946 22.747 39.3671C22.8057 39.4396 22.8799 39.498 22.9641 39.5379C23.0484 39.5779 23.1405 39.5984 23.2338 39.598ZM44.7562 25.4423L43.4068 27.0962C43.387 27.1198 43.3748 27.1488 43.3715 27.1794C43.3683 27.2101 43.3743 27.241 43.3887 27.2682L44.3647 29.1665C44.4311 29.2957 44.3026 29.4383 44.1673 29.3858L42.1773 28.6136C42.1487 28.6021 42.1174 28.5994 42.0873 28.6058C42.0571 28.6122 42.0296 28.6274 42.0082 28.6495L40.5044 30.1644C40.4021 30.2674 40.2267 30.1893 40.2348 30.0443L40.3543 27.9132C40.3564 27.8824 40.3493 27.8518 40.3339 27.8251C40.3185 27.7984 40.2955 27.777 40.2679 27.7634L38.3624 26.8013C38.2329 26.7359 38.2529 26.5449 38.3932 26.5078L40.457 25.9629C40.4869 25.9554 40.5139 25.9392 40.5345 25.9163C40.5551 25.8934 40.5684 25.8649 40.5727 25.8344L40.8989 23.725C40.9211 23.5815 41.109 23.5415 41.1876 23.6636L42.3436 25.458C42.36 25.4841 42.3837 25.5048 42.4118 25.5173C42.44 25.5298 42.4712 25.5337 42.5015 25.5283L44.6085 25.1867C44.7511 25.1636 44.8474 25.3305 44.7562 25.4423ZM38.5607 19.1387C38.5839 18.9963 38.417 18.8999 38.3051 18.9912L36.6512 20.3405C36.6276 20.3603 36.5986 20.3726 36.568 20.3758C36.5373 20.379 36.5064 20.373 36.4792 20.3586L34.5809 19.3826C34.4518 19.3162 34.309 19.4447 34.3615 19.5801L35.1338 21.57C35.1453 21.5986 35.148 21.63 35.1416 21.6601C35.1352 21.6902 35.12 21.7177 35.0979 21.7392L33.583 23.243C33.4799 23.3453 33.558 23.5207 33.703 23.5126L35.8342 23.3931C35.8649 23.391 35.8955 23.3981 35.9222 23.4135C35.9489 23.4289 35.9704 23.4519 35.9839 23.4795L36.946 25.385C37.0115 25.5146 37.2025 25.4945 37.2395 25.3542L37.7845 23.2903C37.792 23.2605 37.8082 23.2335 37.8311 23.2129C37.854 23.1923 37.8825 23.179 37.913 23.1747L40.0224 22.8485C40.1659 22.8263 40.2059 22.6384 40.0838 22.5598L38.2894 21.4038C38.2633 21.3874 38.2427 21.3637 38.2302 21.3355C38.2177 21.3074 38.2138 21.2762 38.2191 21.2458L38.5607 19.1387ZM15.1832 25.1867L17.2903 25.5283C17.3206 25.5336 17.3518 25.5297 17.38 25.5172C17.4081 25.5047 17.4319 25.4841 17.4482 25.458L18.6042 23.6636C18.6829 23.5415 18.8707 23.5815 18.8929 23.725L19.2191 25.8345C19.2234 25.865 19.2368 25.8935 19.2574 25.9164C19.278 25.9392 19.3049 25.9555 19.3348 25.963L21.3986 26.5079C21.539 26.545 21.559 26.736 21.4295 26.8014L19.524 27.7635C19.4964 27.7771 19.4734 27.7986 19.458 27.8252C19.4426 27.8519 19.4355 27.8826 19.4376 27.9133L19.5571 30.0445C19.5652 30.1894 19.3898 30.2675 19.2875 30.1645L17.7836 28.6495C17.7622 28.6274 17.7346 28.6121 17.7045 28.6057C17.6744 28.5993 17.6431 28.6021 17.6145 28.6135L15.6245 29.3858C15.4892 29.4383 15.3607 29.2956 15.4271 29.1665L16.4031 27.2681C16.4325 27.211 16.4256 27.1458 16.385 27.0962L15.0357 25.4422C14.9444 25.3304 15.0408 25.1635 15.1832 25.1867ZM21.4867 18.9912C21.3749 18.8999 21.208 18.9963 21.2312 19.1387L21.5728 21.2457C21.5781 21.2761 21.5742 21.3073 21.5617 21.3354C21.5492 21.3635 21.5286 21.3873 21.5025 21.4037L19.708 22.5597C19.586 22.6383 19.6259 22.8262 19.7694 22.8483L21.8789 23.1745C21.9094 23.1789 21.9379 23.1922 21.9608 23.2128C21.9837 23.2334 21.9999 23.2604 22.0074 23.2902L22.5524 25.354C22.5894 25.4944 22.7804 25.5145 22.8459 25.3848L23.8079 23.4794C23.8215 23.4518 23.843 23.4288 23.8696 23.4134C23.8963 23.398 23.9269 23.3909 23.9577 23.393L26.0889 23.5125C26.2338 23.5206 26.3119 23.3452 26.2089 23.2428L24.694 21.739C24.6719 21.7176 24.6566 21.6901 24.6502 21.6599C24.6438 21.6298 24.6466 21.5985 24.658 21.5699L25.4303 19.5799C25.4828 19.4446 25.3401 19.316 25.211 19.3825L23.3127 20.3585C23.2855 20.3729 23.2546 20.3789 23.2239 20.3756C23.1933 20.3724 23.1644 20.3602 23.1407 20.3404L21.4867 18.9912Z"
                        fill="#121316"
                      />
                    </svg>
                  </div>
                  <h2 className="mb-4 font-semibold tracking-tight text-center text-2xl">
                    Customer-Centric Approach
                  </h2>
                  <p className="font-manrope text-base text-center">
                    We prioritize understanding your unique needs, providing
                    customized solutions that align with your business goals and
                    drive results.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col items-center last:mb-0">
                  <div className="mb-6">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30Z"
                        fill="#FF317B"
                      />
                      <g clipPath="url(#clip0_2780_3578)">
                        <path
                          d="M46 21.5625V16.875C46 15.3242 44.7383 14.0625 43.1875 14.0625H16.8125C15.2617 14.0625 14 15.3242 14 16.875V21.5625H46ZM35.625 17.8125H41.25C41.7677 17.8125 42.1875 18.2323 42.1875 18.75C42.1875 19.2677 41.7677 19.6875 41.25 19.6875H35.625C35.1073 19.6875 34.6875 19.2677 34.6875 18.75C34.6875 18.2323 35.1073 17.8125 35.625 17.8125ZM26.25 17.8125C26.7677 17.8125 27.1875 18.2323 27.1875 18.75C27.1875 19.2677 26.7677 19.6875 26.25 19.6875C25.7323 19.6875 25.3125 19.2677 25.3125 18.75C25.3125 18.2323 25.7323 17.8125 26.25 17.8125ZM22.5 17.8125C23.0177 17.8125 23.4375 18.2323 23.4375 18.75C23.4375 19.2677 23.0177 19.6875 22.5 19.6875C21.9823 19.6875 21.5625 19.2677 21.5625 18.75C21.5625 18.2323 21.9823 17.8125 22.5 17.8125ZM18.75 17.8125C19.2677 17.8125 19.6875 18.2323 19.6875 18.75C19.6875 19.2677 19.2677 19.6875 18.75 19.6875C18.2323 19.6875 17.8125 19.2677 17.8125 18.75C17.8125 18.2323 18.2323 17.8125 18.75 17.8125ZM14 23.4375V43.125C14 44.6758 15.2617 45.9375 16.8125 45.9375H43.1875C44.7383 45.9375 46 44.6758 46 43.125V23.4375H14ZM24.9606 36.7679C25.365 37.0914 25.4305 37.6813 25.1071 38.0856C24.7837 38.4899 24.1936 38.5555 23.7894 38.232L19.1019 34.482C18.6332 34.1072 18.6329 33.393 19.1019 33.0179L23.7894 29.2679C24.1935 28.9444 24.7836 29.0099 25.1071 29.4143C25.4305 29.8186 25.365 30.4086 24.9606 30.7319L21.1883 33.75L24.9606 36.7679ZM33.6742 27.5568L28.0492 40.6818C27.8453 41.1576 27.2943 41.3783 26.8182 41.1742C26.3423 40.9702 26.1218 40.4191 26.3258 39.9432L31.9508 26.8182C32.1548 26.3423 32.7059 26.1219 33.1818 26.3258C33.6577 26.5297 33.8782 27.0809 33.6742 27.5568ZM40.8981 34.4821L36.2106 38.2321C35.807 38.5551 35.2169 38.4906 34.8929 38.0857C34.5695 37.6814 34.635 37.0914 35.0394 36.768L38.8118 33.75L35.0394 30.7321C34.635 30.4086 34.5695 29.8187 34.8929 29.4144C35.2163 29.0101 35.8063 28.9445 36.2106 29.268L40.8981 33.018C41.3668 33.3928 41.3671 34.1069 40.8981 34.4821Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2780_3578">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(14 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="mb-4 font-semibold tracking-tight text-center text-2xl">
                    Test-Driven Excellence
                  </h2>
                  <p className="font-manrope text-base text-center">
                    Our process includes rigorous testing to guarantee high
                    performance and quality, ensuring your projects are reliable
                    and robust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            className="flex items-center gap-3 rounded-full border-2 border-primary px-8 py-3 font-medium text-base text-primary transition-all duration-200"
            href="contact"
          >
            Hire Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;

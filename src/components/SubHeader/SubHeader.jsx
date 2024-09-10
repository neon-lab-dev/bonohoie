import React from "react";
import "./SubHeader.css";

export default function SubHeader({
  title = "Title",
  buttonText = "Button Text",
}) {
  return (
    <div className="sub-header">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div>
        <button className="btn btn-third">
          <div>
            {buttonText}{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_381_4120)">
                <path
                  d="M2.38069 11.6289C2.07734 11.8686 2.0257 12.3088 2.26535 12.6121C2.50501 12.9155 2.9452 12.9671 3.24856 12.7275L2.38069 11.6289ZM13.7109 4.46205C14.0143 4.2224 14.0659 3.7822 13.8263 3.47885C13.5866 3.17549 13.1464 3.12385 12.8431 3.36351L13.7109 4.46205ZM8.15691 2.01405C7.77275 1.97072 7.4262 2.24702 7.38287 2.63119C7.33954 3.01535 7.61584 3.3619 8 3.40523L8.15691 2.01405ZM10.1339 2.94147L10.0554 3.63706L10.1339 2.94147ZM13.4945 7.19533L14.1894 7.27999L13.4945 7.19533ZM12.5495 9.16396C12.5027 9.54772 12.7759 9.89672 13.1597 9.94348C13.5434 9.99023 13.8924 9.71704 13.9392 9.33328L12.5495 9.16396ZM13.1021 3.71817L13.5921 3.21827L13.5921 3.21827L13.1021 3.71817ZM13.4258 4.12794L14.0256 3.76694L14.0256 3.76694L13.4258 4.12794ZM3.24856 12.7275L13.7109 4.46205L12.8431 3.36351L2.38069 11.6289L3.24856 12.7275ZM8 3.40523L10.0554 3.63706L10.2124 2.24589L8.15691 2.01405L8 3.40523ZM12.7996 7.11067L12.5495 9.16396L13.9392 9.33328L14.1894 7.27999L12.7996 7.11067ZM10.0554 3.63706C10.8914 3.73135 11.4594 3.79649 11.8851 3.89416C12.297 3.98866 12.4874 4.09584 12.6121 4.21807L13.5921 3.21827C13.2074 2.84113 12.7333 2.6524 12.1982 2.52962C11.6769 2.41001 11.0156 2.33648 10.2124 2.24589L10.0554 3.63706ZM14.1894 7.27999C14.2871 6.4776 14.3686 5.81721 14.3729 5.28239C14.3773 4.73341 14.3034 4.22854 14.0256 3.76694L12.8261 4.48894C12.9162 4.63855 12.9764 4.84864 12.973 5.27119C12.9695 5.7079 12.9014 6.2756 12.7996 7.11067L14.1894 7.27999ZM12.6121 4.21807C12.6946 4.29895 12.7665 4.38995 12.8261 4.48894L14.0256 3.76694C13.9049 3.56643 13.7592 3.38209 13.5921 3.21827L12.6121 4.21807Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_381_4120">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
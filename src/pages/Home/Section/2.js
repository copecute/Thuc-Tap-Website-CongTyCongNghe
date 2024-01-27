import clsx from 'clsx';
import Styles from './2.module.css';

function Session2() {
  return (
    <section className={clsx(Styles.wrapper)}>
      <div className={clsx(Styles.gridCols)}>
        <div className={clsx(Styles.gridColItem)}>
          <div className={clsx(Styles.icon)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className={clsx(Styles.featured_info)}>
            <span>Top 10 nhà cung cấp máy tính tốt nhất việt nam</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione facilis animi voluptas
              exercitationem molestiae.
            </p>
          </div>
        </div>
        <div className={clsx(Styles.gridColItem)}>
          <div className={clsx(Styles.icon)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className={clsx(Styles.featured_info)}>
            <span>Designed to be modern</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum esse corrupti. Quo, labore debitis!</p>
          </div>
        </div>
        <div className={clsx(Styles.gridColItem)}>
          <div className={clsx(Styles.icon)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div className={clsx(Styles.featured_info)}>
            <span>Documentation for everything</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum voluptate totam ipsa corrupti vero!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Session2;

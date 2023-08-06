export const Button_007 = ({ as, children, ...rest }) => {
  const styles = `
  .iep-button-66 {
    text-align: center;
    font-size: 1rem;

    /* 46px - 56px */
    line-height: clamp(2.875rem, 8vw, 3.5rem);
    text-decoration: none;
    font-weight: 700;
    min-width: 10.875rem;
    margin: auto;
    color: #1a1a1a;
    padding: 0 0 0 1.5rem;

    /* prevents padding from affecting height and width */
    box-sizing: border-box;
    background-color: #fff;
    display: inline-flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 1.5rem;
    position: relative;
    z-index: 1;
    transition: color .3s, border .3s;
  }

  .iep-button-66:before {
    /* background color */
    content: '';
    width: 0%;
    height: 100%;
    background-color: #1a1a1a;
    opacity: 1;
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    transition: width .3s;
    z-index: -1;
  }
  
  .iep-button-66:after {
    /* button border */
    content: '';
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid #1a1a1a;
  
    /* prevents border from affecting height and width */
    box-sizing: border-box;
    opacity: 1;
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    transition: opacity .3s;
    z-index: 1;
    pointer-events: none;
  }
  
  .iep-button-66 .iep-wrapper {
    width: 2.75rem;
    height: auto;
    background-color: #fff;
    border-left: 2px solid #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    transition: border .3s;
  }
  
  .iep-button-66 .iep-wrapper:before {
    /* background color */
    content: '';
    width: 0%;
    height: 100%;
    background-color: #F15A24;
    opacity: 1;
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    transition: width .3s;
    transition-delay: .1s;
    z-index: -1;
  }
  
  .iep-button-66 .iep-icon {
    width: 1.5rem;
    height: auto;
  }
  
  .iep-button-66 .iep-icon path {
    transition: fill .3s;
  }
  
  .iep-button-66:hover {
    color: #fff;
  }
  
  .iep-button-66:hover:before {
    width: 100%;
  }
  
  .iep-button-66:hover:after {
    opacity: 0;
  }
  
  .iep-button-66:hover .iep-wrapper {
    border-color: #1a1a1a;
  }
  
  .iep-button-66:hover .iep-wrapper:before {
    width: 100%;
  }

  .iep-button-66:hover .iep-icon path {
    fill: #fff;
  }       
  `
  if (as === 'link') {
    return (
      <a className="iep-button-66" {...rest}>
        {children}
        <div className="iep-wrapper">
          <svg className="iep-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="#1a1a1a" />
          </svg>
        </div>
        <style jsx>{styles}</style>
      </a>
    )
  }

  return (
    <button className="iep-button-66" {...rest}>
      {children}
      <div className="iep-wrapper">
        <svg className="iep-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="#1a1a1a" />
        </svg>
      </div>
      <style jsx>{styles}</style>
    </button>
  )
}
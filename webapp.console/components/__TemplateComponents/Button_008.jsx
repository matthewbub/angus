export const Button_008 = ({ as, children, ...rest }) => {
  const styles = `
    .iep-button-713 {
      text-align: center;
      font-size: 1rem;

      /* 46px - 56px */
      line-height: clamp(2.875rem, 8vw, 3.5rem);
      text-decoration: none;
      font-weight: 700;
      min-width: 10.875rem;
      margin: auto;
      color: #fff;
      padding: 0 2rem;

      /* prevents padding from affecting height and width */
      box-sizing: border-box;
      background-color: #F15A24;
      box-shadow: 4px 4px 0px 0px #1A1A1A;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.25rem;
      position: relative;
      z-index: 1;
      transform: skew(-10deg);
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    .iep-button-713 .iep-icon {
      transition: transform .3s;
    }
    
    .iep-button-713:hover {
      background-color: #1a1a1a;
      box-shadow: 4px 4px 0px 0px var(--primary);
    }
    
    .iep-button-713:hover .iep-icon {
      transform: translateX(0.25rem);
    }
  `;

  if (as === 'link') {
    return (
      <a className="iep-button-713" {...rest}>
        {children}
        <svg className="iep-icon" aria-hidden="true" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.83 11.29L10.59 7.05001C10.497 6.95628 10.3864 6.88189 10.2646 6.83112C10.1427 6.78035 10.012 6.75421 9.88 6.75421C9.74799 6.75421 9.61729 6.78035 9.49543 6.83112C9.37357 6.88189 9.26297 6.95628 9.17 7.05001C8.98375 7.23737 8.87921 7.49082 8.87921 7.75501C8.87921 8.0192 8.98375 8.27265 9.17 8.46001L12.71 12L9.17 15.54C8.98375 15.7274 8.87921 15.9808 8.87921 16.245C8.87921 16.5092 8.98375 16.7626 9.17 16.95C9.26344 17.0427 9.37426 17.116 9.4961 17.1658C9.61794 17.2155 9.7484 17.2408 9.88 17.24C10.0116 17.2408 10.1421 17.2155 10.2639 17.1658C10.3857 17.116 10.4966 17.0427 10.59 16.95L14.83 12.71C14.9237 12.617 14.9981 12.5064 15.0489 12.3846C15.0997 12.2627 15.1258 12.132 15.1258 12C15.1258 11.868 15.0997 11.7373 15.0489 11.6154C14.9981 11.4936 14.9237 11.383 14.83 11.29Z" fill="white" />
          <path d="M20.83 11.29L16.59 7.05001C16.497 6.95628 16.3864 6.88189 16.2646 6.83112C16.1427 6.78035 16.012 6.75421 15.88 6.75421C15.748 6.75421 15.6173 6.78035 15.4954 6.83112C15.3736 6.88189 15.263 6.95628 15.17 7.05001C14.9838 7.23737 14.8792 7.49082 14.8792 7.75501C14.8792 8.0192 14.9838 8.27265 15.17 8.46001L18.71 12L15.17 15.54C14.9838 15.7274 14.8792 15.9808 14.8792 16.245C14.8792 16.5092 14.9838 16.7626 15.17 16.95C15.2634 17.0427 15.3743 17.116 15.4961 17.1658C15.6179 17.2155 15.7484 17.2408 15.88 17.24C16.0116 17.2408 16.1421 17.2155 16.2639 17.1658C16.3857 17.116 16.4966 17.0427 16.59 16.95L20.83 12.71C20.9237 12.617 20.9981 12.5064 21.0489 12.3846C21.0997 12.2627 21.1258 12.132 21.1258 12C21.1258 11.868 21.0997 11.7373 21.0489 11.6154C20.9981 11.4936 20.9237 11.383 20.83 11.29Z" fill="white" />
        </svg>
        <style jsx>{styles}</style>
      </a>
    )
  }

  return (
    <button className="iep-button-713" {...rest}>
      {children}
      <svg className="iep-icon" aria-hidden="true" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.83 11.29L10.59 7.05001C10.497 6.95628 10.3864 6.88189 10.2646 6.83112C10.1427 6.78035 10.012 6.75421 9.88 6.75421C9.74799 6.75421 9.61729 6.78035 9.49543 6.83112C9.37357 6.88189 9.26297 6.95628 9.17 7.05001C8.98375 7.23737 8.87921 7.49082 8.87921 7.75501C8.87921 8.0192 8.98375 8.27265 9.17 8.46001L12.71 12L9.17 15.54C8.98375 15.7274 8.87921 15.9808 8.87921 16.245C8.87921 16.5092 8.98375 16.7626 9.17 16.95C9.26344 17.0427 9.37426 17.116 9.4961 17.1658C9.61794 17.2155 9.7484 17.2408 9.88 17.24C10.0116 17.2408 10.1421 17.2155 10.2639 17.1658C10.3857 17.116 10.4966 17.0427 10.59 16.95L14.83 12.71C14.9237 12.617 14.9981 12.5064 15.0489 12.3846C15.0997 12.2627 15.1258 12.132 15.1258 12C15.1258 11.868 15.0997 11.7373 15.0489 11.6154C14.9981 11.4936 14.9237 11.383 14.83 11.29Z" fill="white" />
        <path d="M20.83 11.29L16.59 7.05001C16.497 6.95628 16.3864 6.88189 16.2646 6.83112C16.1427 6.78035 16.012 6.75421 15.88 6.75421C15.748 6.75421 15.6173 6.78035 15.4954 6.83112C15.3736 6.88189 15.263 6.95628 15.17 7.05001C14.9838 7.23737 14.8792 7.49082 14.8792 7.75501C14.8792 8.0192 14.9838 8.27265 15.17 8.46001L18.71 12L15.17 15.54C14.9838 15.7274 14.8792 15.9808 14.8792 16.245C14.8792 16.5092 14.9838 16.7626 15.17 16.95C15.2634 17.0427 15.3743 17.116 15.4961 17.1658C15.6179 17.2155 15.7484 17.2408 15.88 17.24C16.0116 17.2408 16.1421 17.2155 16.2639 17.1658C16.3857 17.116 16.4966 17.0427 16.59 16.95L20.83 12.71C20.9237 12.617 20.9981 12.5064 21.0489 12.3846C21.0997 12.2627 21.1258 12.132 21.1258 12C21.1258 11.868 21.0997 11.7373 21.0489 11.6154C20.9981 11.4936 20.9237 11.383 20.83 11.29Z" fill="white" />
      </svg>
      <style jsx>{styles}</style>
    </button>
  )
}
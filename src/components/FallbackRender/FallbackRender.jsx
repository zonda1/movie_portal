import './FallbackRender.css';

function fallbackRender({ error, resetErrorBoundary }) {
  
  return (
    <div className='fallback' role='alert'>
      <div className='fallback__pic'>
        <img src='../../images/cancel.svg' alt='error' />
      </div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button className='fallback__button' type='button' onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
}

export { fallbackRender };

import styled from 'styled-components';

const Wrapper = styled.section`
  .header {
    display: flex;
    nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items: center;
    }
    
    span {
      img{
        width:13rem;
        height: 13rem;
        margin-right: 2rem;
        z-index: -1;
      }
    }
    
  }
  
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  .container-page {
    margin: -4rem 4rem 4rem 4rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    //max-width: 35em;
    
    h2 {
      color: var(--primary-500);
    }
    div {
      padding: 0 0.5rem 0 0.5rem;
      display: flex;
      flex-wrap: wrap;
      
      .features{
        margin: 0.5rem;
        padding: 0.5rem;
        text-align: center;
        flex-basis: 31%;
        min-width: 20rem;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        background-color: rgba(14,124,134, 0.25);
        
        h3 {
          font-weight: 500;
          color: var(--grey-900);
          text-shadow: 0.5px 0.5px var(--primary-700);
        }
        
      }

    }
    
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;

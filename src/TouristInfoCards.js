import { LinkButton } from './LinkButton'

export const TouristInfoCards = ({ className }) => {
  return (
    <div className={className}>
      <article className="card">
        <div className="card-body">
          <h2>Glasgow</h2>
          <img
            src="https://api.wearehomesforstudents.com/wp-content/uploads/2020/07/blog-glasgow-nightlife.jpg"
            className="card-img-top"
            alt="glasgow"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <LinkButton
            className={'btn btn-primary'}
            href={'https://peoplemakeglasgow.com'}
          >
            Visit Glasgow
          </LinkButton>
        </div>
      </article>
      <article className="card">
        <div className="card-body">
          <h2>Manchester</h2>
          <img
            src="https://cdnp.flypgs.com/files/Sehirler-long-tail/Manchester/manchester-kopru-.jpg"
            className="card-img-top"
            alt="manchester"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <LinkButton
            className={'btn btn-primary'}
            href={'https://visitmanchester.com'}
          >
            Visit Manchester
          </LinkButton>
        </div>
      </article>
      <article className="card">
        <div className="card-body">
          <h2>London</h2>
          <img
            src="https://bookmundi.com/blog/wp-content/uploads/2016/06/The-Palace-of-Westminster-London.jpg"
            className="card-img-top"
            alt="london"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <LinkButton
            className={'btn btn-primary'}
            href={'https://visitlondon.com'}
          >
            Visit London
          </LinkButton>
        </div>
      </article>
    </div>
  )
}

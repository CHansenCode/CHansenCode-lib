export const ComponentView = ({ data, children }) => {
  return (
    <Frame>
      <Aside>
        <header>
          <Title title={data.title} />
          <Description description={data.descr} />
        </header>
        <div>
          <Properties data={data.properties} />
        </div>
      </Aside>

      <View>{children}</View>
    </Frame>
  );
};

const Frame = ({ children }) => {
  return (
    <>
      <div className="frame">{children}</div>

      <style jsx>
        {`
          .frame {
            width: 100%;
            display: grid;
            grid-template: 'aside view' 1fr / 20rem 1fr;
            box-shadow: 0 0 5rem -3rem currentColor;
            border: thin solid rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </>
  );
};
const Aside = ({ children }) => {
  return (
    <>
      <aside className="ch_aside">{children}</aside>

      <style jsx>
        {`
          .ch_aside {
            padding: 1rem;
            display: grid;
            grid-template:
              'titleDescript' auto
              'props' 1fr / 1fr;
            padding: 1rem;
            box-shadow: 0 0 3rem -2rem currentColor;
            border-right: thin solid rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </>
  );
};
const Title = ({ title }) => {
  return (
    <>
      <h4 className="sc ch_comp_aside">{title}</h4>

      <style jsx>
        {`
          .ch_comp_aside {
          }
        `}
      </style>
    </>
  );
};
const Description = ({ description }) => {
  return (
    <>
      <p className="ch_descr">{description}</p>

      <style jsx>
        {`
          .ch_descr {
            font-size: 0.85rem;
            font-style: italic;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
};
const Properties = ({ data }) => {
  return (
    <>
      <p>props: </p>
      {data &&
        data.map((prop, i) => (
          <div className="properties" key={`${prop.key}${i}`}>
            <h5>{`"${prop.key}" :`}</h5>
            <h6 className="sc">{prop.type}</h6>
          </div>
        ))}
      <style jsx>
        {`
          .properties {
            padding-left: 0.5rem;
            display: flex;
            white-space: nowrap;
          }
          .properties h5 {
            width: 8rem;
            padding-right: 0.5rem;
          }
          .properties h6 {
            font-style: italic;
          }
        `}
      </style>
    </>
  );
};
const View = ({ children }) => {
  return (
    <>
      <div className="view">{children}</div>

      <style jsx>
        {`
          .view {
            width: 100%;
            padding: 2vw 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

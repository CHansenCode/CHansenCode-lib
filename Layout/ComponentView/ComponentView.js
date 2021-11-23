export const ComponentView = ({ data, children }) => {
  return (
    <Frame>
      <View>{children}</View>

      <Aside>
        <div>
          <Title title={data.title} />
          <Description description={data.descr} />
        </div>
        <div>
          <Properties data={data.properties} />
        </div>
      </Aside>
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
            display: flex;
            flex-direction: column;
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
      <aside className="aside">{children}</aside>

      <style jsx>
        {`
          .aside {
            display: grid;
            grid-template: 'titleDescript properties' 1fr / 300px 1fr;
            grid-gap: 3vw;
            border: thin solid lightgray;
            box-shadow: 0 0 3rem -2rem currentColor;
            padding: 1rem;
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
const Title = ({ title }) => {
  return (
    <>
      <h4>{title}</h4>

      <style jsx>
        {`
          .aside {
          }
        `}
      </style>
    </>
  );
};
const Description = ({ description }) => {
  return (
    <>
      <p>{description}</p>

      <style jsx>
        {`
          .aside {
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
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

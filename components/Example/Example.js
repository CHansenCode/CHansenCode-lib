import css from './Example.module.scss';

export const Example = ({
  input,
  number,
  textarea,
  ternary,
  select,
  dropdown,
}) => {
  let width = 20;
  const styles = {
    wrapper: {
      border: 'thin solid',
      maxWidth: `${width + number * 2}rem`,
      padding: `${number}rem`,
      boxShadow: ternary ? '0 0 3rem -1rem currentColor' : 'none',
    },
    text: {
      margin: '1rem 0',
    },
  };
  return (
    <div style={styles.wrapper}>
      <h4 className={ternary ? 'sc' : ''}>{input}</h4>

      <h6 style={styles.text}>{textarea}</h6>

      <div style={{ display: 'flex' }}>
        <p className="sc" style={{ marginRight: '1rem' }}>
          {select}
        </p>
        in
        <p style={{ marginLeft: '1rem' }}>{dropdown}</p>
      </div>
    </div>
  );
};

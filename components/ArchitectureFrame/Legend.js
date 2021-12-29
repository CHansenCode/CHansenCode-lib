import css from './Legend.module.scss';

export const Legend = ({ id, project, ...props }) => {
  //
  const data = {
    owner: props.data.owner ? props.data.owner : '',
    architect: props.architect ? props.architect : '',
    handler: props.handler ? props.handler : '',
    author: props.author ? props.author : '',
    scale: props.scale ? props.scale : '',
    date: props.date ? props.date : '',
  };

  return (
    <aside id={id} className={css.legend}>
      <header>{props.children}</header>

      <div className={css.logo}>{/* <Logo width="60%" /> */}</div>

      <div className={css.projectInfo}>
        <h6>projectnamn:</h6>
        {project ? project : '...'}
      </div>

      <footer>
        <Box label="owner" value={data.owner} gridArea="proAnsv" />
        <Box label="ansv. ark" value={data.architect} gridArea="ansvArk" />
        <Box label="handl." value={data.handler} gridArea="ritadAv" />
        <Box label="ritad av" value={data.author} gridArea="hand" />
        <Box label="scale" value={data.scale} gridArea="scale" />
        <Box label="date" value={data.date} gridArea="date" />
      </footer>
    </aside>
  );
};

const Box = ({ label, value, gridArea }) => {
  return (
    <div style={{ gridArea: gridArea }} className={css.box}>
      <h6>{label}:</h6>
      <h5>{value ? value : '...'}</h5>
    </div>
  );
};

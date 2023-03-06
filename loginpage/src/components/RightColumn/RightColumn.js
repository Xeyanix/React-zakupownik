import logo from '../.././logo.svg';
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

function RightColumn() {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
        <p>
          Right column
        </p>
      </header>
    </div>
  );
}

export default RightColumn;

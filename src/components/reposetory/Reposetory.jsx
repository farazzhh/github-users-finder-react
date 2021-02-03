import React from 'react'
import styles from './reposetory.module.scss'
const Reposetory = ({repo,index}) => {
    return (
      <div className={styles.repos_parent}>
        <a href={repo.html_url} className={styles.repos_link} target="_blank">
          {index} - {repo.name}
        </a>
      </div>
    );
}

export default Reposetory

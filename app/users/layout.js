import styles from './users.module.css'

export default function UsersLayout({
                                        children, // will be a page or nested layout
                                    }) {
    return (
        <section>
            <nav className={styles.nav}>
                users page
            </nav>

            {children}
        </section>
    )
}
import classNames from 'classnames';
import styles from './nlkklnlk.module.scss';

export interface NlkklnlkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Nlkklnlk = ({ className }: NlkklnlkProps) => {
    return <div className={classNames(styles.root, className)}>Nlkklnlk</div>;
};

import * as styles from './index.css';

export type TabsProps<A> = {
  tabs: Array<{
    value: A;
    label: string;
  }>;
  value: A;
  onChange: (v: A) => void;
};

export default function Tabs<A>({ value, tabs, onChange }: TabsProps<A>) {
  return (
    <ul className={styles.list}>
      {tabs.map((tab) => (
        <li
          key={tab.value as string}
          className={value === tab.value ? styles.itemSelected : styles.item}
        >
          <a
            href="#"
            onClick={() => {
              onChange(tab.value);
            }}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

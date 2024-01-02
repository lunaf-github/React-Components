export type ThemeContextType = {
    theme: string, 
    toggleTheme: (event: React.ChangeEvent<HTMLSelectElement>) => void, 
    colors: {
        [color: string]: Dict<string>
    }
}


interface Dict<T> {
    [k: string]: T
}
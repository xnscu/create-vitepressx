# create-vitepressx

Start an opinioned vitepress project with vitepress-sidebars and giscus included.

# Usage

```sh
npm create vitepressx@latest -y
```

or passing arguments directly:

```sh
npx -y create-vitepressx@latest project-name --user=github-username
```
# Sync PrimeVue and Ant-Design-Vue
In your project, run:
```sh
npx -y cpgit primefaces/primevue -s=packages/primevue/src lib/primevue
npx -y cpgit vueComponent/ant-design-vue -s=components lib/ant-design-vue
```

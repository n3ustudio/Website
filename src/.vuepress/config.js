module.exports = {
  title: 'NEUTRINO Studio',
  description: 'GUI for NEUTRINO.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Download',
        link: 'https://n3ustudio.vbox.moe/res/releases/Setup.exe',
        target: '_blank'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        children: ['Guide']
      }
    ],
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    repo: 'n3ustudio/NEUTRINO-Studio',
    repoLabel: 'GitHub',
    docsRepo: 'n3ustudio/Website',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    smoothScroll: true
  }
}

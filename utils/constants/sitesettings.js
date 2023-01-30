// Listas personalizadas para disparo de email
const adminList = process.env.adminemails?.split(';') || ['mutorialsproject@gmail.com', 'patrickfengsr@gmail.com', 'testing1@gmail.com'];
const contributorList = [];

module.exports = { adminList: adminList, contributorList: contributorList };

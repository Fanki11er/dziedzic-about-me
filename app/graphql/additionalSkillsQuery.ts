export const additionalSkillsQuery = `
query {
  allSingleAdditionalSkills(orderBy: position_ASC) {
    additionalSkill
    id
  }
}
`;

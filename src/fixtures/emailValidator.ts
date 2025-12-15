type EmailValidationResult = {
  validEmails: string[];
  invalidEmails: string[];
  duplicateEmails: string[];
};

export function validateEmails(emails: string[]): EmailValidationResult {
  const EMAIL_REGEX = /^[a-z0-9_]+@[a-z0-9_]+\.[a-z]{2,}$/;
  const validEmails: string[] = [];
  const invalidEmails: string[] = [];
  const duplicateEmails: string[] = [];
  const seen = new Set<string>();

  for (const email of emails) {
    // detect duplicate 
    if (seen.has(email)) {
      duplicateEmails.push(email);
      continue;
    }
    seen.add(email);

    // validate format
    if (EMAIL_REGEX.test(email)) {
      validEmails.push(email);
    } else {
      invalidEmails.push(email);
    }
  }

  return {
    validEmails,
    invalidEmails,
    duplicateEmails,
  };
}

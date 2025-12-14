import { test } from '../src/fixtures/baseFixture';
import { validateEmails } from '../src/fixtures/emailValidator';

test('email validation', () => {
    const input = [
        "john@test.com",
        "invalid-email",
        "mary@example.org",
        "john@test.com",
        "JOHN@test.com",
        "hello@world",
        "qa_user@company.io"
    ];

    console.log(validateEmails(input));

});

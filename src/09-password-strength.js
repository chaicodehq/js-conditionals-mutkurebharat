/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  let isWeak = false;
  // isMedium = false;
  let isUpperCase = false;
  let isLowerCase = false;
  let isStrong = false;
  let isVeryStrong = false;

  let passwordStrength;
  let arr = [];

  if (password === " " || typeof password !== "string") {
    return "weak";
  }

  let isWeakCharCount = 0;
  let upperCount = 0;
  let lowerCount = 0;
  let isStrongCount = 0;
  const specialCharsRegex = /[^\w\s]/;

  password.split("").forEach((val, index) => {
    if (typeof val === "string") {
      isWeakCharCount++;
    }
    if (/[a-zA-Z]/.test(val) && val === val.toUpperCase()) {
      upperCount++;
    }
    if (/[a-zA-Z]/.test(val) && val === val.toLowerCase()) {
      lowerCount++;
    }
    if (!isNaN(val)) {
      isStrongCount++;
    }
  });
  isWeak = isWeakCharCount >= 8 ? true : false;
  arr.push(isWeak);

  isUpperCase = upperCount >= 1 ? true : false;
  arr.push(isUpperCase);

  isLowerCase = lowerCount >= 1 ? true : false;
  arr.push(isLowerCase);

  isStrong = isStrongCount >= 1 ? true : false;
  arr.push(isStrong);

  isVeryStrong = specialCharsRegex.test(password);
  arr.push(isVeryStrong);

  let strengthCount = 0;

  arr.forEach((val) => {
    if (val) {
      strengthCount = strengthCount + 1;
    }
  });
  if (strengthCount < 2) {
    passwordStrength = "weak";
  } else if (strengthCount >= 2 && strengthCount <= 3) {
    passwordStrength = "medium";
  } else if (strengthCount === 4) {
    passwordStrength = "strong";
  } else if (strengthCount === 5) {
    passwordStrength = "very strong";
  }
  return passwordStrength;
}

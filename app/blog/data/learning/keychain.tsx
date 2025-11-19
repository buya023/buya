import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const ChapKeychainBlog = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-10 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/img/myAvatar1.png"
          alt="Author avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            🔐 Deep Dive into React Native Keychain: Secure Credentials & Biometric Login
          </h1>
          <p className="text-gray-500 text-sm mt-1">By Buya • November 2025</p>
        </div>
      </div>

      {/* Badge */}
      <Badge className="mb-4 bg-blue-100 text-blue-800">React Native</Badge>

      <CardContent className="space-y-6 text-gray-700">
        <p className="text-lg font-semibold">
          React Native developers often face challenges when handling secure user credentials and biometric authentication.
          <code>react-native-keychain</code> is one of the most reliable libraries for this, allowing apps to securely store
          usernames, passwords, tokens, and even biometric-protected credentials.
        </p>

        <Separator />

        {/* What is Keychain */}
        <h2 className="text-xl font-bold">🔍 What is <code>react-native-keychain</code>?</h2>
        <p>
          It’s a wrapper around:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>iOS Keychain</li>
          <li>Android Keystore</li>
        </ul>

        <p>It allows developers to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Store sensitive credentials securely.</li>
          <li>Protect credentials with biometric methods (Face ID, Touch ID).</li>
          <li>Automatically handle encryption and secure access control.</li>
        </ul>

        <Separator />

        {/* Hook Example */}
        <h2 className="text-xl font-bold">🧩 Using Keychain in React Native</h2>
        <p>Here’s a practical hook that handles credentials and biometric login:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`export const useKeychain = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [biometryType, setBiometryType] = useState(null);

  const options = useMemo(
    () => ({
      service: getBundleId(),
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
      accessible: Keychain.ACCESSIBLE.ALWAYS,
      authenticationPrompt: { title: t('auth.biometric.read') },
    }),
    [t],
  );

  const getBiometryType = useCallback(() =>
    Keychain.getSupportedBiometryType().then(setBiometryType),
  []);

  const getCredentials = useCallback(
    () => Keychain.getGenericPassword(options),
    [options],
  );

  const setCredentials = useCallback(
    ({ username, password }) =>
      Keychain.setGenericPassword(username, password, options),
    [options],
  );

  const resetCredentials = useCallback(() => {
    dispatch(setIsBiometricLoginEnabled(undefined));
    Keychain.resetGenericPassword(options).catch(() =>
      Alert.alert(t('general.errorOccurred')),
    );
  }, [t, options, dispatch]);

  useEffect(() => {
    getBiometryType();
  }, [getBiometryType]);

  return { biometryType, setCredentials, getCredentials, resetCredentials };
};`}
        </pre>

        <h3 className="font-semibold mt-4">How this works:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>setCredentials</strong>: saves username & password in secure storage.</li>
          <li><strong>getCredentials</strong>: retrieves them (biometric prompt if enabled).</li>
          <li><strong>resetCredentials</strong>: clears saved credentials.</li>
          <li><strong>getBiometryType</strong>: detects available biometric method.</li>
        </ul>

        <Separator />

        {/* Options Breakdown */}
        <h2 className="text-xl font-bold">⚙️ Understanding Keychain Options</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>service:</strong> identifier for the Keychain entry.</li>
          <li><strong>accessControl:</strong> enforces biometric or passcode access.</li>
          <li><strong>accessible:</strong> defines when the data can be read.</li>
          <li><strong>authenticationPrompt:</strong> message shown in biometric dialog.</li>
        </ul>

        <Separator />

        {/* iOS 26 Issue */}
        <h2 className="text-xl font-bold">⚠️ iOS 26 Issue: Biometric Login Fails</h2>

        <p className="font-semibold">When testing on iOS 26, a critical issue appeared:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li><code>Keychain.getGenericPassword()</code> returns:</li>
          <ul className="list-disc pl-10">
            <li><strong>username = null</strong></li>
            <li><strong>password = UUID string</strong></li>
          </ul>
          <li>This breaks biometric login flows that depend on the username.</li>
        </ul>

        <h3 className="font-semibold mt-3">Why it happens</h3>
        <p>
          iOS 26 changed Keychain’s behavior.  
          Some combinations of <code>accessControl</code> and <code>accessible</code> cause Keychain entries
          to return <strong>partial values</strong>.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Older iOS versions always returned both fields.</li>
          <li>iOS 26 returns only password → username becomes <code>null</code>.</li>
        </ul>

        <Separator />

        {/* Workarounds */}
        <h2 className="text-xl font-bold">🛠️ Workarounds & Fixes</h2>

        <h3 className="font-semibold mt-2">1. Store all data together</h3>
        <p>Instead of separate username/password fields, store them as JSON:</p>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`setGenericPassword("user", JSON.stringify({ username, password }))`}
        </pre>

        <h3 className="font-semibold mt-2">2. Use a different access control</h3>

        <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
{`accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE`}
        </pre>

        <h3 className="font-semibold mt-2">3. Add fallback logic</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Check if password exists but username is null.</li>
          <li>Prompt user to re-enter credentials if needed.</li>
          <li>Recreate missing username fields.</li>
        </ul>

        <h3 className="font-semibold mt-2">4. Monitor iOS updates</h3>
        <p>Apple may fix this in future iOS 26 patches.</p>

        <Separator />

        {/* Key Takeaways */}
        <h2 className="text-xl font-bold">✨ Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>react-native-keychain</code> is powerful but sensitive to OS changes.</li>
          <li>Test biometric login after every iOS update.</li>
          <li>iOS 26 may return <strong>null usernames</strong>, breaking login flows.</li>
          <li>Use combined storage, fallback logic, or alternate access control modes.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

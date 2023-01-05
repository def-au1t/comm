/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleH.js
 */

#pragma once

#include <ReactCommon/TurboModule.h>
#include <react/bridging/Bridging.h>

namespace facebook {
namespace react {

class JSI_EXPORT CommCoreModuleSchemaCxxSpecJSI : public TurboModule {
protected:
  CommCoreModuleSchemaCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker);

public:
  virtual jsi::Value getDraft(jsi::Runtime &rt, jsi::String key) = 0;
  virtual jsi::Value updateDraft(jsi::Runtime &rt, jsi::String key, jsi::String text) = 0;
  virtual jsi::Value moveDraft(jsi::Runtime &rt, jsi::String oldKey, jsi::String newKey) = 0;
  virtual jsi::Value getClientDBStore(jsi::Runtime &rt) = 0;
  virtual jsi::Value removeAllDrafts(jsi::Runtime &rt) = 0;
  virtual jsi::Array getAllMessagesSync(jsi::Runtime &rt) = 0;
  virtual jsi::Value processDraftStoreOperations(jsi::Runtime &rt, jsi::Array operations) = 0;
  virtual jsi::Value processMessageStoreOperations(jsi::Runtime &rt, jsi::Array operations) = 0;
  virtual void processMessageStoreOperationsSync(jsi::Runtime &rt, jsi::Array operations) = 0;
  virtual jsi::Array getAllThreadsSync(jsi::Runtime &rt) = 0;
  virtual jsi::Value processThreadStoreOperations(jsi::Runtime &rt, jsi::Array operations) = 0;
  virtual void processThreadStoreOperationsSync(jsi::Runtime &rt, jsi::Array operations) = 0;
  virtual jsi::Value initializeCryptoAccount(jsi::Runtime &rt) = 0;
  virtual jsi::Value getUserPublicKey(jsi::Runtime &rt) = 0;
  virtual jsi::Value getUserOneTimeKeys(jsi::Runtime &rt) = 0;
  virtual double getCodeVersion(jsi::Runtime &rt) = 0;
  virtual jsi::Value setNotifyToken(jsi::Runtime &rt, jsi::String token) = 0;
  virtual jsi::Value clearNotifyToken(jsi::Runtime &rt) = 0;
  virtual jsi::Value setCurrentUserID(jsi::Runtime &rt, jsi::String userID) = 0;
  virtual jsi::Value getCurrentUserID(jsi::Runtime &rt) = 0;
  virtual jsi::Value setDeviceID(jsi::Runtime &rt, jsi::String deviceType) = 0;
  virtual jsi::Value getDeviceID(jsi::Runtime &rt) = 0;
  virtual jsi::Value clearSensitiveData(jsi::Runtime &rt) = 0;

};

template <typename T>
class JSI_EXPORT CommCoreModuleSchemaCxxSpec : public TurboModule {
public:
  jsi::Value get(jsi::Runtime &rt, const jsi::PropNameID &propName) override {
    return delegate_.get(rt, propName);
  }

protected:
  CommCoreModuleSchemaCxxSpec(std::shared_ptr<CallInvoker> jsInvoker)
    : TurboModule("CommTurboModule", jsInvoker),
      delegate_(static_cast<T*>(this), jsInvoker) {}

private:
  class Delegate : public CommCoreModuleSchemaCxxSpecJSI {
  public:
    Delegate(T *instance, std::shared_ptr<CallInvoker> jsInvoker) :
      CommCoreModuleSchemaCxxSpecJSI(std::move(jsInvoker)), instance_(instance) {}

    jsi::Value getDraft(jsi::Runtime &rt, jsi::String key) override {
      static_assert(
          bridging::getParameterCount(&T::getDraft) == 2,
          "Expected getDraft(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::getDraft, jsInvoker_, instance_, std::move(key));
    }
    jsi::Value updateDraft(jsi::Runtime &rt, jsi::String key, jsi::String text) override {
      static_assert(
          bridging::getParameterCount(&T::updateDraft) == 3,
          "Expected updateDraft(...) to have 3 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::updateDraft, jsInvoker_, instance_, std::move(key), std::move(text));
    }
    jsi::Value moveDraft(jsi::Runtime &rt, jsi::String oldKey, jsi::String newKey) override {
      static_assert(
          bridging::getParameterCount(&T::moveDraft) == 3,
          "Expected moveDraft(...) to have 3 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::moveDraft, jsInvoker_, instance_, std::move(oldKey), std::move(newKey));
    }
    jsi::Value getClientDBStore(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getClientDBStore) == 1,
          "Expected getClientDBStore(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::getClientDBStore, jsInvoker_, instance_);
    }
    jsi::Value removeAllDrafts(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::removeAllDrafts) == 1,
          "Expected removeAllDrafts(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::removeAllDrafts, jsInvoker_, instance_);
    }
    jsi::Array getAllMessagesSync(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getAllMessagesSync) == 1,
          "Expected getAllMessagesSync(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Array>(
          rt, &T::getAllMessagesSync, jsInvoker_, instance_);
    }
    jsi::Value processDraftStoreOperations(jsi::Runtime &rt, jsi::Array operations) override {
      static_assert(
          bridging::getParameterCount(&T::processDraftStoreOperations) == 2,
          "Expected processDraftStoreOperations(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::processDraftStoreOperations, jsInvoker_, instance_, std::move(operations));
    }
    jsi::Value processMessageStoreOperations(jsi::Runtime &rt, jsi::Array operations) override {
      static_assert(
          bridging::getParameterCount(&T::processMessageStoreOperations) == 2,
          "Expected processMessageStoreOperations(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::processMessageStoreOperations, jsInvoker_, instance_, std::move(operations));
    }
    void processMessageStoreOperationsSync(jsi::Runtime &rt, jsi::Array operations) override {
      static_assert(
          bridging::getParameterCount(&T::processMessageStoreOperationsSync) == 2,
          "Expected processMessageStoreOperationsSync(...) to have 2 parameters");

      return bridging::callFromJs<void>(
          rt, &T::processMessageStoreOperationsSync, jsInvoker_, instance_, std::move(operations));
    }
    jsi::Array getAllThreadsSync(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getAllThreadsSync) == 1,
          "Expected getAllThreadsSync(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Array>(
          rt, &T::getAllThreadsSync, jsInvoker_, instance_);
    }
    jsi::Value processThreadStoreOperations(jsi::Runtime &rt, jsi::Array operations) override {
      static_assert(
          bridging::getParameterCount(&T::processThreadStoreOperations) == 2,
          "Expected processThreadStoreOperations(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::processThreadStoreOperations, jsInvoker_, instance_, std::move(operations));
    }
    void processThreadStoreOperationsSync(jsi::Runtime &rt, jsi::Array operations) override {
      static_assert(
          bridging::getParameterCount(&T::processThreadStoreOperationsSync) == 2,
          "Expected processThreadStoreOperationsSync(...) to have 2 parameters");

      return bridging::callFromJs<void>(
          rt, &T::processThreadStoreOperationsSync, jsInvoker_, instance_, std::move(operations));
    }
    jsi::Value initializeCryptoAccount(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::initializeCryptoAccount) == 1,
          "Expected initializeCryptoAccount(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::initializeCryptoAccount, jsInvoker_, instance_);
    }
    jsi::Value getUserPublicKey(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getUserPublicKey) == 1,
          "Expected getUserPublicKey(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::getUserPublicKey, jsInvoker_, instance_);
    }
    jsi::Value getUserOneTimeKeys(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getUserOneTimeKeys) == 1,
          "Expected getUserOneTimeKeys(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::getUserOneTimeKeys, jsInvoker_, instance_);
    }
    double getCodeVersion(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getCodeVersion) == 1,
          "Expected getCodeVersion(...) to have 1 parameters");

      return bridging::callFromJs<double>(
          rt, &T::getCodeVersion, jsInvoker_, instance_);
    }
    jsi::Value setNotifyToken(jsi::Runtime &rt, jsi::String token) override {
      static_assert(
          bridging::getParameterCount(&T::setNotifyToken) == 2,
          "Expected setNotifyToken(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::setNotifyToken, jsInvoker_, instance_, std::move(token));
    }
    jsi::Value clearNotifyToken(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::clearNotifyToken) == 1,
          "Expected clearNotifyToken(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::clearNotifyToken, jsInvoker_, instance_);
    }
    jsi::Value setCurrentUserID(jsi::Runtime &rt, jsi::String userID) override {
      static_assert(
          bridging::getParameterCount(&T::setCurrentUserID) == 2,
          "Expected setCurrentUserID(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::setCurrentUserID, jsInvoker_, instance_, std::move(userID));
    }
    jsi::Value getCurrentUserID(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getCurrentUserID) == 1,
          "Expected getCurrentUserID(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::getCurrentUserID, jsInvoker_, instance_);
    }
    jsi::Value setDeviceID(jsi::Runtime &rt, jsi::String deviceType) override {
      static_assert(
          bridging::getParameterCount(&T::setDeviceID) == 2,
          "Expected setDeviceID(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::setDeviceID, jsInvoker_, instance_, std::move(deviceType));
    }
    jsi::Value getDeviceID(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::getDeviceID) == 1,
          "Expected getDeviceID(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::getDeviceID, jsInvoker_, instance_);
    }
    jsi::Value clearSensitiveData(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::clearSensitiveData) == 1,
          "Expected clearSensitiveData(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::clearSensitiveData, jsInvoker_, instance_);
    }

  private:
    T *instance_;
  };

  Delegate delegate_;
};

} // namespace react
} // namespace facebook

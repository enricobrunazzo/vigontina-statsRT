import React, { useCallback } from "react";
import GoalModal from "./modals/GoalModal";
import OwnGoalModal from "./modals/OwnGoalModal";
import PenaltyAdvancedModal from "./modals/PenaltyAdvancedModal";
import LineupModal from "./modals/LineupModal";
import DeleteEventModal from "./modals/DeleteEventModal";
import SubstitutionModal from "./modals/SubstitutionModal";
import FreeKickModal from "./modals/FreeKickModal";

const Modals = ({
  availablePlayers,
  opponentName,
  periodLineup,
  notCalled,
  match,
  periodIndex,
  showGoalDialog,
  setShowGoalDialog,
  showOwnGoalDialog,
  setShowOwnGoalDialog,
  showPenaltyDialog,
  setShowPenaltyDialog,
  showLineupDialog,
  setShowLineupDialog,
  showDeleteEventDialog,
  setShowDeleteEventDialog,
  showSubstitution,
  setShowSubstitution,
  showFreeKickDialog,
  setShowFreeKickDialog,
  onAddGoal,
  onAddOwnGoal,
  onAddPenalty,
  onDeleteEvent,
  onAddSubstitution,
  onAddFreeKick,
  onSetLineup,
}) => {
  // Handlers
  const handleGoalConfirm = useCallback((scorer, assist) => {
    onAddGoal(scorer, assist);
    setShowGoalDialog(false);
  }, [onAddGoal, setShowGoalDialog]);
  const handleGoalCancel = useCallback(() => setShowGoalDialog(false), [setShowGoalDialog]);

  const handleOwnGoalConfirm = useCallback((team) => {
    onAddOwnGoal(team);
    setShowOwnGoalDialog(false);
  }, [onAddOwnGoal, setShowOwnGoalDialog]);
  const handleOwnGoalCancel = useCallback(() => setShowOwnGoalDialog(false), [setShowOwnGoalDialog]);

  const handlePenaltyConfirm = useCallback((...args) => {
    onAddPenalty(...args);
    setShowPenaltyDialog(false);
  }, [onAddPenalty, setShowPenaltyDialog]);
  const handlePenaltyCancel = useCallback(() => setShowPenaltyDialog(false), [setShowPenaltyDialog]);

  const handleLineupConfirm = useCallback((lineup) => {
    onSetLineup(periodIndex, lineup);
    setShowLineupDialog(false);
  }, [onSetLineup, periodIndex, setShowLineupDialog]);
  const handleLineupCancel = useCallback(() => setShowLineupDialog(false), [setShowLineupDialog]);

  const handleDeleteConfirm = useCallback((idx, reason) => {
    onDeleteEvent(periodIndex, idx, reason);
    setShowDeleteEventDialog(false);
  }, [onDeleteEvent, periodIndex, setShowDeleteEventDialog]);
  const handleDeleteCancel = useCallback(() => setShowDeleteEventDialog(false), [setShowDeleteEventDialog]);

  const handleSubstitutionConfirm = useCallback((outNum, inNum) => {
    onAddSubstitution(periodIndex, outNum, inNum);
    setShowSubstitution(false);
  }, [onAddSubstitution, periodIndex, setShowSubstitution]);
  const handleSubstitutionCancel = useCallback(() => setShowSubstitution(false), [setShowSubstitution]);

  const handleFreeKickConfirm = useCallback((outcome, team, player, hitType) => {
    onAddFreeKick(outcome, team, player, hitType);
    setShowFreeKickDialog(false);
  }, [onAddFreeKick, setShowFreeKickDialog]);
  const handleFreeKickCancel = useCallback(() => setShowFreeKickDialog(false), [setShowFreeKickDialog]);

  return (
    <>
      {showGoalDialog && <GoalModal availablePlayers={availablePlayers} onConfirm={handleGoalConfirm} onCancel={handleGoalCancel} />}
      {showOwnGoalDialog && <OwnGoalModal opponentName={opponentName} onConfirm={handleOwnGoalConfirm} onCancel={handleOwnGoalCancel} />}
      {showPenaltyDialog && <PenaltyAdvancedModal availablePlayers={availablePlayers} opponentName={opponentName} onConfirm={handlePenaltyConfirm} onCancel={handlePenaltyCancel} />}
      {showLineupDialog && <LineupModal availablePlayers={availablePlayers} initialLineup={periodLineup} onConfirm={handleLineupConfirm} onCancel={handleLineupCancel} />}
      {showDeleteEventDialog && <DeleteEventModal events={match.periods[periodIndex].goals || []} opponentName={opponentName} onConfirm={handleDeleteConfirm} onCancel={handleDeleteCancel} />}
      {showSubstitution && <SubstitutionModal periodLineup={periodLineup} notCalled={notCalled} onConfirm={handleSubstitutionConfirm} onCancel={handleSubstitutionCancel} />}
      {showFreeKickDialog && <FreeKickModal availablePlayers={availablePlayers} opponentName={opponentName} onConfirm={handleFreeKickConfirm} onCancel={handleFreeKickCancel} />}
    </>
  );
};

export default Modals;
